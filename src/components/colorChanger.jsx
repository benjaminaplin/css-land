import React, { useState, useEffect } from 'react'

const ColorChanger = () => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const updateCoordinates = ({ x, y }) => {
    setX(x)
    setY(y)
  }

  useEffect(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }, [])

  const percentageWidth = 100 * (x / width)
  const percentageHeight = 100 * (y / height)
  const backgroundColor = `rgb(${percentageWidth.toFixed(3)}%, ${percentageHeight.toFixed(3)}%, ${percentageHeight.toFixed(3)}%)`
  return (
    <div className="App" >
      <div>
        <div
          className="main"
          style={{ backgroundColor }}
          onMouseMove={(e) => updateCoordinates({ x: e.clientX, y: e.clientY })}>
          <h1 className='color-title'>
            {backgroundColor}
          </h1>
        </div>
      </div>
    </div>
  );
}


export default ColorChanger