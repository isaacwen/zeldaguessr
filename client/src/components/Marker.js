import React from 'react'
import { MdPersonPinCircle } from 'react-icons/md'

const ICON_SIZE_PX = 32

const convPctStr = (float) => {
  return (float * 100).toFixed(2).toString() + "%"
}

const Marker = ({className, style}) => {
  return (
    <div className = {"pointer-events-none " + className} style = {{top: convPctStr((style.y - ICON_SIZE_PX) / style.height), left: convPctStr((style.x - ICON_SIZE_PX / 2) / style.width)}}>
      <MdPersonPinCircle color = "red" size = {ICON_SIZE_PX.toString() + "px"}></MdPersonPinCircle>
    </div>
  )
}

export default Marker