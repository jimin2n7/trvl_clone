import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <div className='footer-subscription'>
                <p className='footer-subscription__heading'>Join the Adventure newsletter to receive our best vacation deals</p>
                <p className='footer-subscription__text'>You can unsubscribe at any time.</p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' placeholder='Your Email'/>
                        <Link className='btn-mobile' to='/signup'>
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </Link>
                    </form>
                </div>
            </div>
            <div className='footer-links'>
                <div className='footer-links-items'>
                    <h2>About Us</h2>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>How it works</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Testimonials</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Careers</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Investors</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Terms of Service</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-links-items'>
                    <h2>Contact Us</h2>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Contact</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Support</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Destinations</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Sponsorships</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-links-items'>
                    <h2>Videos</h2>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Submit Video</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Ambassadors</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Agency</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Influencer</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-links-items'>
                    <h2>Social Media</h2>
                    <ul className='footer-links-list'>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Instagram</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Facebook</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Youtube</Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link to='/signup' className='footer-link'>Twitter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer