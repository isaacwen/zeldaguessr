import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { MapInteractionCSS } from 'react-map-interaction';
import Marker from './Marker';

const Map = () => {
  const [marker, setMarker] = useState(
    // {x: 0, y: 0, width: 0, height: 0}
    null
  )

  const handleClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    setMarker({x: x, y: y, width: (rect.right - rect.left), height: (rect.bottom - rect.top)})
  }

  return (
    // <div className = "absolute bottom-0 right-0 justify-center px-5 pt-5 pb-2.5 group transition-all duration-200 w-1/6 hover:w-1/2 hover:h-5/6 h-full">
    //   <img className = "object-contain absolute bottom-14 right-5 z-0 max-h-full" src = {"base.png"} alt = "map"></img>
    //   {/* <div className = "relative pb-2.5 z-10 opacity-0 group-hover:opacity-100 group-hover:delay-200 w-full max-h-full pr-10">
    //     <button className = "rounded duration-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6">Make Guess</button>
    //   </div> */}
    //   <div className = "">
    //     <button className = "text-lg py-2 px-6 opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 rounded duration-0 bg-blue-500 hover:bg-blue-700 text-white pr-5">Guess</button>
    //   </div>
    // </div>
    

    <div className = "absolute bottom-0 right-0 px-5 pt-5 pb-2.5 w-screen h-full z-0">
      <div className = "hover:object-scale-down transition-all duration-200 absolute bottom-5 right-5 z-0 w-60 hover:w-172 group">
        <img
          src = {"base.png"}
          alt = "map"
          onClick = {handleClick}
        />
        {marker !== null && <Marker className = {"absolute w-4 h-4 z-10 opacity-0 group-hover:opacity-100 delay-100"} style = {marker}></Marker>}
      </div>
    </div>
  )
}

export default Map