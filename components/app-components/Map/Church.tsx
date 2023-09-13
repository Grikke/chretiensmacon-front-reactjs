
import React, { MouseEventHandler } from 'react'

const ChurchSVG = ({name= "", x, y, reverse = false, show = false,coordinates}: {
  name: string 
  x: string 
  y: string
  show: boolean
  reverse?: boolean
  coordinates: string
}) => {
  return (<g onClick={() => window?.open(coordinates, '_blank')?.focus()} transform={`translate(${x}, ${y})`} style={{opacity: show ? 1 : 0}} className="church-svg">
    <g style={{transform: show ? 'translate(0) rotate(0)' : reverse ? 'translate(-10%) rotate(-35deg)':'translate(10%) rotate(35deg)', transition: '.21s all linear'}}>
      <path transform={reverse ? 'translate(0, 6)':'translate(0, 6)'} fill='white' d="M10 22v-4a2 2 0 0 1 4 0v4h4V12a1 1 0 0 0-.485-.857L13 8.434V6h2V4h-2V2h-2v2H9v2h2v2.434l-4.515 2.709A1 1 0 0 0 6 12v10h4zm-7 0h2v-8.118l-2.447 1.224A.998.998 0 0 0 2 16v5a1 1 0 0 0 1 1zm18.447-6.895L19 13.882V22h2a1 1 0 0 0 1-1v-5c0-.379-.214-.725-.553-.895z"/>
      <text text-anchor={reverse ? "end" : "start"} transform={reverse ? `translate(23, 39)`: `translate(0, 39)`} className="church-name">{name}</text>
    </g>
  </g>)
}

export default ChurchSVG
