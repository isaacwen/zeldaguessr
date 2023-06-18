import React from 'react'

const LocationPicture = ({imageName}) => {
  const imageUrl = process.env.REACT_APP_AWS_ZELDAGUESSR_S3_BASE + `/${imageName}`

  return (
    <div className = "flex items-center justify-center h-screen w-screen p-10">
      <img className = "max-h-full max-w-full object-contain" src = {imageUrl} alt = {imageUrl}></img>
    </div>
  )
}

export default LocationPicture