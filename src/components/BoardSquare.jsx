import React from 'react'
import {Square} from './Square'
import {canMoveKnight, moveKnight} from '../Game'
import {ItemTypes} from '../Constants'
import {useDrop} from 'react-dnd'

function BoardSquare({x, y, children}) {
  const black = (x + y) % 2 === 1
  let background

  const [{isOver, canDrop}, drop] = useDrop(() => ({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canMoveKnight(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
  }), [x, y])

  if (isOver && black) {
    background = "orange"
  } else if (isOver && !black) {
    background = "red"
  }

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <Square black={black}>{children}</Square>
      {canDrop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: background || 'yellow',
          }}
        />
      )}
    </div>
  )
}

export default BoardSquare
