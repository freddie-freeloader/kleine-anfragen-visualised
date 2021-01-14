import d3 from '@/assets/d3';

import { COLOR } from '@/core/CONSTANTS';

export default class MinistryChart {
  constructor(selector, requests, maxRequests, sortedParties) {
    this.selector = selector;
    this.requests = requests;
    this.maxRequests = maxRequests;
    this.sortedParties = sortedParties;

    this.svg = null;
    this.width = 200;
    this.height = 100;

    this.nRequests = null;
    this.parties = null;
    this.partyCount = null;
  }

  draw() {
    return this
      .setUpSVG()
      .setUpScales()
      .prepareData()
      .drawData();
  }

  setUpSVG() {
    this.svg = d3.select(this.selector)
      .append('svg')
      .attr('viewBox', [0, 0, this.width, this.height]);
    return this;
  }

  setUpScales() {
    this.x = d3.scaleLinear()
      .domain([0, this.maxRequests])
      .range([0, this.width]);
    return this;
  }

  showColors() {
    this.svg.selectAll('.rect-party')
      .attr('fill', (d) => COLOR.get(d.party));
    return this;
  }

  hideColors() {
    this.svg.selectAll('.rect-party')
      .attr('fill', 'lightgray');
    return this;
  }

  prepareData() {
    this.nRequests = this.requests.length;
    this.parties = this.requests.flatMap((d) => d.parties);

    this.partyCount = d3
      .rollups(this.parties, (v) => v.length, (d) => d)
      .map(([party, count]) => ({ party, count }))
      .sort((a, b) => d3.ascending(
        this.sortedParties.findIndex((p) => p === a.party),
        this.sortedParties.findIndex((p) => p === b.party),
      ));
    const cumsum = d3.cumsum(this.partyCount, (d) => d.count);
    this.partyCount = this.partyCount
      .map(({ party, count }, i) => ({
        party,
        count,
        x: i === 0 ? 0 : cumsum[i - 1],
      }));

    return this;
  }

  drawData() {
    this.svg.selectAll('.rect-party')
      .data(this.partyCount)
      .join('rect')
      .attr('class', 'rect-party')
      .attr('x', (d) => this.x(d.x))
      .attr('y', this.height / 2)
      .attr('width', (d) => (d.count / this.maxRequests) * this.width)
      .attr('height', this.height / 2)
      .attr('fill', 'lightgray');

    this.svg.append('text')
      .attr('y', this.height / 2 - 5)
      .attr('fill', 'black')
      .style('font-size', '3em')
      .style('font-weight', 'bold')
      .text(this.nRequests);

    return this;
  }
}
