import * as React from 'react';


export const Square = ({black, movable, children}) => {
  let fill = black ? 'black' : 'white'
  if (movable) fill = black ? 'orange' : 'red'
  const stroke = black ? 'white' : 'black'

  return (
    <div style={{
      backgroundColor: fill,
      color: stroke,
      display: "flex",
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      cursor: "pointer"
    }}>{children}</div>
  );
};
