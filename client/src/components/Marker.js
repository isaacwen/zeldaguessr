import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { FaMapPin } from 'react-icons/fa'
import { calcPct } from '../utils/algs'

const ICON_SIZE_PX = 32

// Offset values are [TOP_OFFSET, LEFT_OFFSET]
const ICON_OFFSETS = {
  "GuessPin": [-ICON_SIZE_PX, -(ICON_SIZE_PX/2)],
  "GoalPin": [-ICON_SIZE_PX, -(ICON_SIZE_PX/2)]
}

// either marker or position must be non-null
const Marker = ({className, marker, position, iconType}) => {
  var style = {}

  if (marker !== undefined) {
    style["top"] = calcPct(marker.y, marker.height, ICON_OFFSETS[iconType][0]).toString() + "%"
    style["left"] = calcPct(marker.x, marker.width, ICON_OFFSETS[iconType][1]).toString() + "%"
  } else {
    style["top"] = (position["yPct"] + ICON_OFFSETS[iconType][0] / position["mapHeight"] * 100).toString() + "%"
    style["left"] = (position["xPct"] + ICON_OFFSETS[iconType][1] / position["mapWidth"] * 100).toString() + "%"
  }

  const getButton = () => {
    const size = ICON_SIZE_PX.toString() + "px"
    switch (iconType) {
      case "GuessPin":
        return <MdLocationPin color = "red" size = {size}></MdLocationPin>
      case "GoalPin":
        return <FaMapPin color = "purple" size = {size}></FaMapPin>
    }
  }

  return (
    <div className = {"pointer-events-none " + className} style = {style}>
      {getButton(iconType)}
    </div>
  )
}

export default Marker