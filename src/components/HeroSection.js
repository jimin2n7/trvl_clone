import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import Button from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="./videos/video-1.mp4" autoPlay muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Link to="/" className='btn-mobile'>
                <Button buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
            </Link>
            <Link to="/" className='btn-mobile'>
                <Button buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle"></i> </Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection