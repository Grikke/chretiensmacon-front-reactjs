
import React, { MouseEventHandler } from 'react'

const ChurchSVG = ({name= "", x, y, reverse = false, show = false}: {
  name: string 
  x: string 
  y: string
  show: boolean
  reverse?: boolean
}) => {
  return (<g transform={`translate(${x}, ${y})`} style={{opacity: show ? 1 : 0}} className="church-svg">
    <g style={{transform: show ? 'translate(0) rotate(0)' : reverse ? 'translate(-10%) rotate(35deg)':'translate(10%) rotate(-35deg)', transition: '.21s all linear'}}>
      <text transform={reverse ? `translate(-157, -2)`: `translate(27, -2)`} className="church-name">{name}</text>
      <polyline r="7" transform={reverse ? `scale(-1, 1)`: ''} style={{width: '50%', fill: 'none', stroke:'#FFFFFF', strokeMiterlimit: '10'}} points=" 157.4,0.5 27.6,0.5 0.4,27.7 "/>
    </g>
  </g>)
}

export default ChurchSVG
