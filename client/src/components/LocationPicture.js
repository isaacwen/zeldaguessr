import React from 'react'

const LocationPicture = () => {
  return (
    <div className = "flex items-center justify-center h-screen w-screen p-10">
      <img className = "max-h-full max-w-full object-contain" src = {"testPicture.jpeg"} alt = "location"></img>
    </div>
  )
}

export default LocationPicture