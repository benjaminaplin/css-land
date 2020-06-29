import React, { useState } from 'react'

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  console.log('content :>> ', content);
  return (
    <>
      <div className="pressable" onClick={toggleOpen}>
        { isOpen 
        ? <>
          <div className="arrow-down" />
          <div className="color-maker-accordion-content">
          {isOpen && `${content}`}
          </div>
        </>
        : <div className="arrow-up" />
      }
      </div>
    </>
  )
}

export default Accordion
