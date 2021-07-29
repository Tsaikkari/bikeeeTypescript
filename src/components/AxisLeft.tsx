export const AxisLeft = ({ yScale }: any) =>
  yScale.domain().map((tickValue: any) => (
    <text
      key={tickValue}
      style={{ textAnchor: 'end', fill: '#635f5d' }}
      x={-3}
      dy='.32em'
      y={yScale(tickValue) + yScale.bandwidth() / 2}
    >
      {tickValue.toUpperCase()}
    </text>
  ))
