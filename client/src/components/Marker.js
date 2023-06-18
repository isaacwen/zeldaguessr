import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { FaMapPin } from 'react-icons/fa'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from 'react-icons/tb'
import { calcPct } from '../utils/algs'

const ICON_SIZE_PX = 32

// Offset values are [TOP_OFFSET, LEFT_OFFSET]
const ICON_OFFSETS = {
  "GuessPin": [-ICON_SIZE_PX, -(ICON_SIZE_PX/2)],
  "GoalPin": [-ICON_SIZE_PX, -(ICON_SIZE_PX/2)],
  "ResultGuessCircle": [-(2 * ICON_SIZE_PX/3), -(ICON_SIZE_PX/2)],
  "ResultGoalCircle": [-(2 * ICON_SIZE_PX/3), -(ICON_SIZE_PX/2)]
}

// either marker or position must be non-null
const Marker = ({className, marker, position, iconType, resultNum}) => {
  var style = {}

  if (marker !== undefined) {
    style["top"] = calcPct(marker.y, marker.height, ICON_OFFSETS[iconType][0]).toString() + "%"
    style["left"] = calcPct(marker.x, marker.width, ICON_OFFSETS[iconType][1]).toString() + "%"
  } else if (position !== undefined) {
    style["top"] = (position["yPct"] + ICON_OFFSETS[iconType][0] / position["mapHeight"] * 100).toString() + "%"
    style["left"] = (position["xPct"] + ICON_OFFSETS[iconType][1] / position["mapWidth"] * 100).toString() + "%"
  } else {
    console.log("Either marker or position needs to be non-null")
  }

  const getButton = () => {
    const size = ICON_SIZE_PX.toString() + "px"
    switch (iconType) {
      case "GuessPin":
        return <MdLocationPin color = "red" size = {size}></MdLocationPin>
      case "GoalPin":
        return <FaMapPin color = "purple" size = {size}></FaMapPin>
      case "ResultGuessCircle":
      case "ResultGoalCircle":
        const color = iconType === "ResultGuessCircle" ? "red" : "purple"
        const fill = "grey"
        switch (resultNum) {
          case 1:
            return <TbCircleNumber1 color = {color} size = {size} key = {iconType + color} fill = {fill}></TbCircleNumber1>
          case 2:
            return <TbCircleNumber2 color = {color} size = {size} key = {iconType + color} fill = {fill}></TbCircleNumber2>
          case 3:
            return <TbCircleNumber3 color = {color} size = {size} key = {iconType + color} fill = {fill}></TbCircleNumber3>
          case 4:
            return <TbCircleNumber4 color = {color} size = {size} key = {iconType + color} fill = {fill}></TbCircleNumber4>
          case 5:
            return <TbCircleNumber5 color = {color} size = {size} key = {iconType + color} fill = {fill}></TbCircleNumber5>
        }
    }
  }

  return (
    <div className = {"pointer-events-none " + className} style = {style}>
      {getButton(iconType)}
    </div>
  )
}

export default Marker