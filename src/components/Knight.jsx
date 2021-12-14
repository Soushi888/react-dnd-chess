import * as React from 'react';
import {ItemTypes} from "../Constants";
import {useDrag} from "react-dnd";

export const Knight = () => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return <span style={{
    fontSize: "70px",
    opacity: isDragging ? 0.5 : 1,
    fontWeight: 'bold',
    cursor: 'move',
  }} ref={drag}>♘</span>
};
