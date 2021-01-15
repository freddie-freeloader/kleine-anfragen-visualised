import d3 from '@/assets/d3';

export default class ParliamentLegend {
  constructor(selector, category, scale) {
    this.selector = selector;
    this.category = category;
    this.scale = scale;

    this.radius = 5;

    this.svg = null;
    this.width = 2 * this.radius;
    this.height = 2 * this.radius;
  }

  draw() {
    this.svg = d3.select(this.selector)
      .append('svg')
      .attr('viewBox', [
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height])
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('overflow', 'visible');

    const { category: c } = this;

    this.svg.append('circle')
      .attr('r', this.radius)
      .attr('fill', (c === '0' || c === '<1 per year' ? 'whitesmoke' : 'lightgray'));

    this.svg.append('circle')
      .attr('r', this.scale(c))
      .attr('fill', 'gray');

    return this;
  }
}