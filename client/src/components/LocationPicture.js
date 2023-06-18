import React from 'react'

const LocationPicture = ({imageName}) => {
  const imageUrl = `https://zeldaguessr.s3.us-east-2.amazonaws.com/${imageName}`

  return (
    <div className = "flex items-center justify-center h-screen w-screen p-10">
      <img className = "max-h-full max-w-full object-contain" src = {imageUrl} alt = "location"></img>
    </div>
  )
}

export default LocationPicture