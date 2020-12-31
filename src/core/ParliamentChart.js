import d3 from '@/assets/d3';

import { PARTY_COLORS, PARTY_NAMES, SORTED_PARTIES } from '@/core/CONSTANTS';

const IGNORE_PARTIES = ['MISSING', 'FRAKTIONSLOS'];

export default class ParliamentChart {
  constructor(selector, requests, elections, dates) {
    this.selector = selector;
    this.requests = requests;
    this.elections = elections;
    this.dates = dates;

    this.svg = null;
    this.width = null;
    this.height = null;
    this.margin = 20;

    this.nRequestsPerHead = null;

    this.config = {
      maxValue: 30,
      nBands: 12,
      innerRadius: null,
      outerRadius: null,
      fontSize: null,
    };
  }

  draw(width) {
    return this
      .reset()
      .prepareData(width)
      .setUpSVG()
      .drawChart();
  }

  reset() {
    if (this.svg) d3.select(`${this.selector} svg`).remove();
    return this;
  }

  prepareData(width) {
    this.width = width;
    this.height = width / 2;
    this.config.innerRadius = 0.05 * width;
    this.config.outerRadius = width / 2 - this.margin;
    this.config.fontSize = `${d3.format('.1f')(width / 27)}px`;

    const nDays = d3.timeDay.count(this.dates.start, this.dates.end);

    const parties = this.requests
      .flatMap((d) => d.parties)
      .filter((party) => !IGNORE_PARTIES.includes(party));
    const requestsMap = d3.rollup(parties, (v) => v.length, (d) => d);
    const seatsMap = new Map(this.elections
      .map(({ party, seats }) => [party, seats]));

    const partyDiff = d3.difference(
      new Set(parties),
      new Set(this.elections.map(({ party }) => party)),
    );
    if (partyDiff.size > 0) {
      console.warn('Parties recorded in requests data are missing in elections', partyDiff);
    }

    this.nRequestsPerHead = this.elections.map((d) => {
      const nRequests = requestsMap.has(d.party) ? requestsMap.get(d.party) : 0;
      const value = ((nRequests / nDays) * 365) / seatsMap.get(d.party);
      let display = 0;
      if (value > 0) {
        display = value < 1 ? '<1' : Math.round(value);
      }

      return {
        party: d.party,
        value: Math.round(value),
        display,
        isOpposition: d.isOpposition,
      };
    }).sort((a, b) => d3.ascending(
      SORTED_PARTIES.findIndex((d) => d === a.party),
      SORTED_PARTIES.findIndex((d) => d === b.party),
    ));

    return this;
  }

  setUpSVG() {
    this.svg = d3.select(this.selector)
      .append('svg')
      .attr('viewBox', [
        -this.width / 2,
        -this.height,
        this.width,
        this.height])
      .attr('width', this.width)
      .attr('height', this.height)
      // .attr('overflow', 'visible')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');

    // this.svg.append('rect')
    //   .attr('x', -this.width / 2)
    //   .attr('y', -this.height)
    //   .attr('width', this.width)
    //   .attr('height', this.height)
    //   .attr('fill', 'steelblue')
    //   .attr('fill-opacity', 0.1);

    return this;
  }

  drawChart() {
    const {
      maxValue, nBands, innerRadius, outerRadius, fontSize,
    } = this.config;

    const x = d3.scaleLinear()
      .domain([0, this.nRequestsPerHead.length])
      .range([-0.5 * Math.PI, 0.5 * Math.PI]);

    const y = d3.scaleLinear()
      .domain([0, maxValue])
      .range([innerRadius, outerRadius]);

    const yTicks = y.ticks(nBands);
    const yTickSpacing = yTicks[1] - yTicks[0];

    const xAxis = (g) => g
      .selectAll('g')
      .data(d3.range(this.nRequestsPerHead.length + 1))
      .join('g')
      .append('path')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
      .attr('stroke-width', 0.5)
      .attr('d', (d) => `
        M${d3.pointRadial(x(d), innerRadius)}
        L${d3.pointRadial(x(d), outerRadius + this.margin)}
      `);

    const yAxis = (g) => g.selectAll('g')
      .data([0, maxValue])
      .join('g')
      .attr('fill', 'none')
      .append('path')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
      .attr('stroke-width', 0.5)
      .attr('d', (d) => d3.arc()
        .outerRadius(y(d))
        .startAngle(x(0))
        .endAngle(x(this.nRequestsPerHead.length))(d));

    this.svg.selectAll('g')
      .data(this.nRequestsPerHead)
      .join('g')
      .attr('class', 'g-party-slice')
      .attr('fill', (d) => PARTY_COLORS.get(d.party))
      .selectAll('path')
      .data((d, i) => d3.range(yTickSpacing, d.value + 1, yTickSpacing)
        .map((step) => ({ step, party: d.party, angle: i })))
      .join('path')
      .attr('fill-opacity', (d, i) => (d.step > maxValue ? 0.1 : (i + 1) / nBands))
      .attr('d', (d) => d3.arc()
        .innerRadius(y(d.step - yTickSpacing))
        .outerRadius(y(d.step))
        .startAngle(x(d.angle))
        .endAngle(x(d.angle + 1))(d));

    const gLabels = this.svg
      .append('g')
      .attr('class', 'labels');

    gLabels
      .append('g')
      .attr('class', 'g-label-paths')
      .selectAll('.label-path')
      .data(d3.range(this.nRequestsPerHead.length))
      .join('path')
      .attr('id', (i) => `${this.selector}-label-path-${i}`)
      .attr('class', 'label-path')
      .attr('fill', 'none')
      .attr('d', (i) => `
        M${d3.pointRadial(x(i), outerRadius + 5)}
        A${outerRadius + 5},${outerRadius + 5} 0,0,1 ${d3.pointRadial(x(i + 1), outerRadius + 5)}
      `);

    gLabels
      .append('g')
      .attr('class', 'g-label-texts')
      .selectAll('.label')
      .data(this.nRequestsPerHead)
      .join('text')
      .attr('class', 'label')
      .append('textPath')
      .attr('xlink:href', (_, i) => `#${this.selector}-label-path-${i}`)
      .attr('startOffset', 5)
      .style('font-size', fontSize)
      .style('font-weight', (d) => (d.isOpposition ? 'bold' : 'normal'))
      .text((d) => `${PARTY_NAMES.get(d.party)} \u00A0 ${d.display}`);

    this.svg.append('g')
      .attr('class', 'axis axis-x')
      .call(xAxis);

    this.svg.append('g')
      .attr('class', 'axis axis-y')
      .call(yAxis);

    return this;
  }
}