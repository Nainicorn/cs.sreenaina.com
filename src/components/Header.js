import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
// import Naina from './Naina'

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false)

    const onBurgerClick = (e) => {
        setBurgerActive(!burgerActive)
    }

    const onLinkClick = (e) => {
        setBurgerActive(!burgerActive)
    }

    return (
        <header>
            <div className="title">writing in discipline</div>
            <div className={burgerActive ? 'links show' : 'links'}>
                <Link to='/home' className='linka' onClick={onLinkClick}>
                    <div className="link">Home</div>
                </Link>
                <Link to='/coding' className='linka' onClick={onLinkClick}>
                    <div className="link">Coding</div>
                </Link>
                <Link to='/assignments' className='linka' onClick={onLinkClick}>
                    <div className="link">Assignments</div>
                </Link>
                <Link to='/takeaways' className='linka' onClick={onLinkClick}>
                    <div className="link">Takeaways</div>
                </Link>
            </div>
            <div className={burgerActive ? 'hamburger toggle' : 'hamburger'} onClick={onBurgerClick}>
                <div className="hamburger-line hamburger-line1"></div>
                <div className="hamburger-line hamburger-line2"></div>
                <div className="hamburger-line hamburger-line3"></div>
            </div>
            {
                // burgerActive && <Naina />
            }
        </header>
    )
}

export default Header