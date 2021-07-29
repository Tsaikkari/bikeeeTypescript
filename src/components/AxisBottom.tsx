export const AxisBottom = ({ xScale, innerHeight, tickFormat }: any) =>
  xScale.ticks().map((tickValue: any) => (
    <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} stroke='#c0c0bb' />
      <text
        key={tickValue}
        style={{ textAnchor: 'middle', fill: '#8e8883' }}
        dy='.71em'
        y={innerHeight + 3}
       >
        {tickFormat(tickValue)}
      </text>
    </g>
  ))
