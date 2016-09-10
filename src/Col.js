import React from 'react';

const bob = divisions => ({ x, y1, y2 }) => {
  const oldHeight = y2 * (divisions / 15);
  const newHeight = oldHeight + (y1 * (divisions / 15));
  const colour = y1 < 5 ? 'yellow' : y1 > 9 ? 'red' : 'orange';
  return (
    <polygon
      key={x}
      fill={colour}
      stroke="black"
      points={`${x},0 ${x+divisions},0 ${x+divisions},-${newHeight} ${x},-${oldHeight}`}
    />
  );
};

const dave = divisions => (acc, value) => {
  let x = 0;
  let oldHeight = 0;
  if (acc.length > 0) {
    x = acc[acc.length - 1].x + divisions;
    oldHeight = acc[acc.length - 1].y1 + acc[acc.length - 1].y2;
  }
  return [...acc, { x, y1: value, y2: oldHeight }];
};

const Col = ({ loading, division, height, width, col }) => {
  if (loading) { return false; }

  return (
    <div>
      <h2>{col.name}</h2>
      <svg height={height} width={width} viewBox={`0 -${height} ${width} ${height}`}>
        {col.profileGradients.reduce(dave(division), {}).map(bob(division))}
      </svg>
    </div>
  );
}

export default Col;
