import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import './Navbar.css'

function Navbar() {
  
  const [click, setClick] = useState(false)
  const [button,setButton] = useState(true)

  const handleClick = ()=> setClick(!click)
  const closeMenuMobile = () => setClick(false)

  const showButton = ()=>{
    if(window.innerWidth <=1023){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(()=>showButton
  ,[])

  window.addEventListener('resize',showButton)
  
  return (
    <>
      <nav className='navbar'>
          <div className="navbar-container">
            <Link to="/trvl_clone" className="navbar-logo" onClick={closeMenuMobile}>
              TRVL <i className="fa-brands fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
              <li className='nav-item' onClick={closeMenuMobile}>
                <Link to='/trvl_clone' className="nav-links">Home</Link>
              </li>
              <li className='nav-item' onClick={closeMenuMobile}>
                <Link to='/services' className="nav-links">Services</Link>
              </li>
              <li className='nav-item' onClick={closeMenuMobile}>
                <Link to='/products' className="nav-links">Products</Link>
              </li>
              <li onClick={closeMenuMobile}>
                <Link to='/signup' className ="nav-links-mobile">Sign Up</Link>
              </li>
            </ul>
            {button&&<Button buttonStyle="btn--outline">SIGN UP</Button>}
          </div>
      </nav>
    </>
  )
}

export default Navbar