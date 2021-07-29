export const Marks = ({ data, yScale, xScale, xValue, yValue, model }: any) =>
  data.map((d: any) => (
    <rect
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
      style={{ fill: '#654e80'}}
    >
      <title>Model: {d.Model}</title>
    </rect>
  ))
