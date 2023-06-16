import React from 'react'
import GameScore from '../components/GameScore'
import LocationPicture from '../components/LocationPicture'
import Map from '../components/Map'

const GuessPage = () => {
  return (
    <div>
      <GameScore></GameScore>
      <LocationPicture></LocationPicture>
      <Map></Map>
    </div>
    
  )
}

export default GuessPage