import { scaleBand, scaleLinear, max } from 'd3'

import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'

const width = 500
const height = 160
const margin = { top: 10, right: 15, bottom: 30, left: 152 }

const Chart = ({ data }: any) => {
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yValue = (d: any) => d.Make
  const xValue = (d: any) => d.Occurrences

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.13);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue) as any])
    .range([0, innerWidth]);

  const xAxisTickFormat = (n: number) => {
    let str = n.toString();
    if (str[2] === '5') {
      str.replace(str, '');
    } else {
      return Number(str);
    }
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight} 
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <Marks
          data={data}
          yScale={yScale}
          xScale={xScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  )
}

export default Chart
