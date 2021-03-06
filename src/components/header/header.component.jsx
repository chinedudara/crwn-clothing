import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser }) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' to='/'/>
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to=''>Contact</Link>
            {currentUser ? 
                <span className='option'>{currentUser.displayName}</span> : ''
            }
            </div>
        </div>
    )
}

export default Header;