import React, { useState } from 'react'

function SplitTheSquare() {
  const BaseSize = 400;
  const[squares,setSquares] = useState([{"id":"1","size":`${BaseSize}`,"position":{"x":0,"y":0}}])

  // Splitting the squares
  const SquareSplit = (Id,Size,Position)=>{
    if(Size<=20) return; // Function should not execute when size is too low

    let newSize = Size/2; 
    const splittedSquares = [
      {"id":`${Id}-1`,"size":newSize,"position":{"x":Position.x,"y":Position.y}},
      {"id":`${Id}-2`,"size":newSize,"position":{"x":Position.x,"y":Position.y + newSize}},
      {"id":`${Id}-3`,"size":newSize,"position":{"x":Position.x + newSize,"y":Position.y}},
      {"id":`${Id}-4`,"size":newSize,"position":{"x":Position.x + newSize,"y":Position.y + newSize}},
    ]

    const Unsplitted_Squares = squares.filter((pre)=>pre.id!==Id)
    setSquares([...splittedSquares,...Unsplitted_Squares]) 

  }

  // Reset
  const ResetSquare = ()=>{
    setSquares([{"id":"1","size":`${BaseSize}`,"position":{"x":0,"y":0}}])
  }

  return (
    <div className='MainParent'>
      <div className='Title'>
        <h2>Split the Square</h2>
      </div>

      <div className='MainSquare'>

        {squares.map(box=>(
          <div 
          className='Squares'
          key={box.id}
          onClick={()=>{SquareSplit(box.id,box.size,box.position)}}
          style={{
            position:"absolute",
            border:"1px solid black",
            height:`${box.size}px`,
            width:`${box.size}px`,
            top:`${box.position.y}px`,
            left:`${box.position.x}px`,
            cursor:"pointer"
          }}
          ></div>
        ))}

      </div>
        <button onClick={()=>{ResetSquare()}}>Reset</button>
    </div>
  )
}

export default SplitTheSquare