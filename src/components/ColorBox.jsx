import React, { useState } from 'react'
import Accordion from "./ui/Accordion"

const ColorBox = ({ color, handleClick }) => (
  <div
    style={{ backgroundColor: color }}
    className="color-box-container">
    <div className="color-maker-accordion-container">
      <Accordion content={color} />
    </div>
    <div
      className="color-box pressable"
      onClick={handleClick}
    />
  </div>
)
export default ColorBox

