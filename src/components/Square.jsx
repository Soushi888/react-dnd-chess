import * as React from 'react';


export const Square = ({black, children}) => {
  let cursor  = "inherit"
  let fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'

  return (
    <div style={{
      backgroundColor: fill,
      color: stroke,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor
    }}>{children}</div>
  );
};
