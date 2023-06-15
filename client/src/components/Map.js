import React from 'react'

const Map = () => {
  return (
    <div className = "absolute bottom-0 right-0 px-5 pt-5 pb-2.5 group transition-all duration-200 w-1/6 hover:w-1/2">
      <img className = "object-contain absolute bottom-5 right-5 z-0" src = {"base.png"} alt = "map"></img>
      <div className = "relative z-10 opacity-0 group-hover:opacity-100 group-hover:delay-200 w-full pr-10">
        <button className = "rounded duration-0 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">Make Guess</button>
      </div>
    </div>
    
  )
}

export default Map