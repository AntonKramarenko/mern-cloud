import React from 'react'
import './navbar.scss'
import Logo from '../../assets/img/navbar__logo.svg'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <img src={Logo} alt=''  className='navbar__logo'/>
            <div className="navbar__header">MERN CLOUD</div>
            <div className="navbar__login">
                <NavLink to='/login'>
                Войти
                </NavLink>
                </div>
            <div className="navbar__registration">
                <NavLink to='/registration'>
                Регистрация
                </NavLink>
                </div>
        </div>
    </div>
  )
}
