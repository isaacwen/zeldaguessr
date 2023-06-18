import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { MapInteractionCSS } from 'react-map-interaction';
import Marker from './Marker';

const Map = ({marker, setMarker, handleGuess}) => {
  

  const handleClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    setMarker({x: x, y: y, width: (rect.right - rect.left), height: (rect.bottom - rect.top)})
    console.log(marker)
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
      <div className = "hover:object-scale-down transition-all duration-200 absolute bottom-0 right-0 z-0 w-60 hover:w-172 group mb-5 mr-5">
        <img
          src = {"base.png"}
          alt = "map"
          onClick = {handleClick}
        />
        {marker !== null && <Marker className = {"absolute w-4 h-4 z-10 opacity-0 group-hover:opacity-100 delay-100 pb-5 mr-5"} marker = {marker} iconType = {"GuessPin"}></Marker>}
        <div className = "absolute -bottom-2.5 right-0 left-1 w-full pointer-events-none">
          <button 
            className = {`group-hover:pointer-events-auto z-20 text-lg py-2 px-6 opacity-0 disabled:cursor-not-allowed group-hover:disabled:opacity-25 group-hover:enabled:opacity-100 duration-0 delay-100 hover:enabled:bg-blue-700 pr-5 w-64 baseBtn`}
            disabled = {marker === null}
            onClick = {handleGuess}
          >
            {marker === null ? "Make a Guess" : "Submit Guess"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Map