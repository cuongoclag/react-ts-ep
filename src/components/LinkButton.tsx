import React from 'react'
import ArrowR from '../assets/img/arrowRight.png'
import { IProps } from '../interfaces/props'

function LinkButton({ nameLink, number } : IProps) {
  return (
    <div className="link">
        <div className="link-number">{number}</div>
        <div className="link-name">{nameLink}</div>
        <img src={ArrowR} alt="arrow" className="link-img"/>
    </div>
  )
}

export default LinkButton