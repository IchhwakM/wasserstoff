import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { BubbleData } from '../../Assets/Data/GraphData/data';

type Props = {
  data: BubbleData[];
};

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };
const WIDTH = 1011;
const HEIGHT = 423;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const yAxisTicks = [0, 200, 400, 600, 800, 1000];

export const Graph = ({ data }: Props) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current);

      // Remove any existing content in the SVG
      svg.selectAll('*').remove();

      // Create scales
      const xScale = d3
        .scaleBand()
        .domain(months)
        .range([MARGIN.left, WIDTH - MARGIN.right])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, 1000])
        .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

      // Create x-axis
      const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);

      // Create y-axis
      const yAxis = d3
        .axisLeft(yScale)
        .tickSize(0)
        .tickValues(yAxisTicks)
        .tickFormat((d) => (d === 1000 ? '1k' : d.toString()));

      // Append x-axis
      svg
        .append('g')
        .attr("class", "x-axis")
        .attr('transform', `translate(0, ${HEIGHT - MARGIN.bottom})`)
        .call(xAxis)
        .select(".domain") // Select the axis line
        .remove();

      svg.selectAll(".x-axis line").attr("y1", -380 + MARGIN.bottom);
      svg.selectAll(".x-axis .tick line").attr("stroke", "#F1F1F5");
      svg.selectAll(".x-axis .tick text").attr("fill", "#383874");


      // Append y-axis
      svg
        .append('g')
        .attr("class", "y-axis")
        .attr('transform', `translate(${MARGIN.left}, 0)`)
        .call(yAxis)
        .select(".domain") // Select the axis line
        .remove();

      svg.selectAll(".y-axis .tick text").attr("fill", "#383874");


      // Add bubbles
      const bubbles = svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('g');

      bubbles
        .append('circle')
        .attr('cx', (d) => xScale(d.month)!)
        .attr('cy', (d) => yScale(d.value)!)
        .attr('r', (d) => d.radius)
        .attr('fill', (d) => d.color);


      bubbles
        .filter((d) => d.radius > 40)
        .append('text')
        .attr('x', (d) => xScale(d.month)!)
        .attr('y', (d) => yScale(d.value)!)
        .attr('dy', '.35em')
        .style('text-anchor', 'middle')
        .style('font-family', 'Roboto')
        .style('font-size', '16px')
        .style('font-weight', '400')
        .style('fill', 'white')
        .text((d) => d.name);
    }
  }, [data]);

  return <svg ref={ref} width={WIDTH} height={HEIGHT} />;
};


