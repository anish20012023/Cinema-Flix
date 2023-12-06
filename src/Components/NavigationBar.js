import React from 'react'
import navcss from './NavigationBar.module.css';
import logo from '../logo.png'
import { NavLink } from 'react-router-dom';
import profileLogo from '../profile.webp'




function NavigationBar() {
  let username = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).username : ""





  return (
    <nav className={navcss.navCont}>

      <div className={navcss.logo}>
        <NavLink to="/user">
          <img src={logo} width="100%" alt="logo" />  </NavLink>
      </div>

      <ul className={navcss.navItem}>
        <li ><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="/user/movies/1">Movies</NavLink></li>
        <li ><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="tv/1">Tv Shows</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="/user/popular/1">Popular</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? navcss.active : undefined} to="upcoming/1">Upcoming</NavLink></li>
      </ul>

      <div className={navcss.userProfile}>
        <NavLink id={navcss.favourite} className={navcss.favLog} style={({ isActive }) => { return { border: isActive ? '.1rem solid ' : '' } }} to='favourite'><i class="fa-solid fa-bookmark"></i> <span>Favourite</span></NavLink>
      <div className={navcss.logoname}>
      <div id={navcss.profileLogo}>
          <img src={profileLogo} alt="" />
        </div>
        <span id={navcss.username}>Hey, {username}</span>

      </div>


        <NavLink id={navcss.logout} className={navcss.favLog} to='/'><i class="fa-solid fa-arrow-right-from-bracket"></i></NavLink>

      </div>

    </nav>
  )
}

export default NavigationBar