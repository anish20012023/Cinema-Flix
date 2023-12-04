import React, { useRef } from 'react'
import navcss from './NavigationBar.module.css';
import logo from '../logo.png'
import { NavLink } from 'react-router-dom';
import profileLogo from '../profile.webp'




function NavigationBar() {
let username=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).username: ""
  const navbar = useRef()
  window.onscroll = function () {
    if (window.pageYOffset > 500) {


      navbar.current.style.backgroundColor = 'rgba(25, 25, 25, 0.95)';
    }
    else {

      navbar.current.style.backgroundColor = 'rgba(0, 0, 0, 0.288)';
    }
  }



  return (
    <nav className={navcss.navCont} ref={navbar}>

      <div className={navcss.logo}>
        <NavLink to="/user">
          <img src={logo} width="100%" alt="logo" />  </NavLink>
      </div>

      <ul className={navcss.navItem}>
        <li ><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="movies/1">Movies</NavLink></li>
        <li ><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="tv/1">Tv Shows</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="popular/1">Popular</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="upcoming/1">Upcoming</NavLink></li>
      </ul>
      <div className={navcss.userProfile}>
        <div id={navcss.profileLogo}>
          <img src={profileLogo} alt="" />
        </div>
        <span id={navcss.username}>Hey, {username}</span>
        <div className={navcss.favLogDiv}>
        <NavLink id={navcss.favourite}  className={navcss.favLog} style={({isActive})=>{return {border: isActive? '.1rem solid ':''}}} to='favourite'><i class="fa-solid fa-bookmark"></i> <span>Favourite</span></NavLink>
        <NavLink id={navcss.logout} className={navcss.favLog} to='/'><i class="fa-solid fa-arrow-right-from-bracket"></i> <span>Logout</span></NavLink>
        </div>

      </div>

    </nav>
  )
}

export default NavigationBar