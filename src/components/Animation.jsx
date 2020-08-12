import React from 'react'
import { Aperture, Activity } from 'react-feather'
import { url } from '../global/constants'

const Animation = () => {
  return (
    <div className="animation-container">
      <header className="site-header-text">Foxhole Web Development</header>
      <div>
        <div className="monolith" />
        {/* <img
          className="cloud"
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
        />
        <img
          className="cloud"
          src={url('cloud')}
          style={{ display: 'block', width: '20%', marginLeft: '40%' }}
        />
        <img
          className="satellite"
          src={url('satellite4')}
          style={{ width: '15%', marginLeft: '70%' }}
        /> */}
        <div className="earth" />
      </div>
    </div>
  )
}

export default Animation
