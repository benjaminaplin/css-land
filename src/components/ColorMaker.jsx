import React, { useState } from 'react'
import ColorBox from "./ColorBox"

const makeRGB = () => {
  const o = Math.round,
    r = Math.random,
    s = 255
  return `${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}`
}

const ColorMaker = () => {
  const [colors, setColor] = useState({
    1: { rgb: '38, 166, 91', opacity: 1.0, opacityDropsOnClick: true },
    2: { rgb: '240, 52, 52', opacity: 1.0, opacityDropsOnClick: true },
    3: { rgb: '44, 130, 201', opacity: 1.0, opacityDropsOnClick: true },
  })
  const [lastId, setLastId] = useState(3)

  const changeColor = colorId => {
    const color = colors[colorId]
    const colorOpacity = parseFloat(color.opacity)
    let opacityDropsOnClick = color.opacityDropsOnClick
    let newOpacity
    if (colorOpacity === 1.0 || colorOpacity === 1 || opacityDropsOnClick) {
      opacityDropsOnClick = true
      newOpacity = colorOpacity - 0.1
    }
    if (colorOpacity === 0.0 || !opacityDropsOnClick) {
      opacityDropsOnClick = false
      newOpacity = colorOpacity + 0.1
    }
    updateColor(colorId, newOpacity, color, opacityDropsOnClick)
  }

  const updateColor = (colorId, opacity, color, opacityDropsOnClick) => {
    setColor({
      ...colors,
      [colorId]: {
        ...color,
        opacity: opacity.toFixed(2),
        opacityDropsOnClick,
      },
    })
  }

  const createColor = (opacity = null) => {
    const newColor = makeRGB()
    const newColorId = lastId + 1
    const newState = {
      ...colors,
      [newColorId]: { rgb: newColor, opacity: 1, opacityDropsOnClick: true },
    }
    setColor(newState)
    setLastId(newColorId)
  }
  console.log('colors :>> ', colors);
  return (
    <>
      <button onClick={createColor} className="pressable">
        add colorbox
      </button>
      <div className="color-maker-container">
        {Object.keys(colors).map(key => {
          const { rgb, opacity } = colors[key]
          return (
            <div key={key}>
              <ColorBox
                color={`rgba(${rgb}, ${opacity})`}
                handleClick={() => changeColor(key)}
                opacity={opacity}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}


export default ColorMaker