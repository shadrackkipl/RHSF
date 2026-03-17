import React, { useState, useRef, useEffect } from 'react'
import logo2 from '../../logo2.png'
import './Header.css'

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  return (
   <section className='Header'>
    <div>
        <img src={logo2} alt='RHSF logo' className='rhsf-logo' />
        <h1 className='rhsf-h1'>REPENTANCE AND HOLINESS STUDENT FELLOWSHIP</h1>
        <h3 className='rhsf-h3'>Oasis of Hope in Our Institutions</h3>
        <p className='rhsf-p'>Empowering Students for a Life of Faith and Service</p>
        
    </div>

    <div className='audio-controls'>
        <audio ref={audioRef} preload="none">
            <source src="https://s3.radio.co/s97f38db97/listen" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        
        <div className="custom-audio-player">
          <button className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <div className="volume-control">
            <span className="volume-icon">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

        </div>
    </div>
    
    <div className='radio-text'>
        <h2>Listen to Jesus is Lord live radio broadcast:</h2>
    </div>
    
   </section>
   

     
   
  )
}

export default Header

