import React from 'react'
import fav from './favouritePage.module.css';
import bckimg from '../banner1.jpg'

function FavouritePage() {
    let favList=JSON.parse(localStorage.getItem('currentUser'))
   if(favList.favourite.length==0){
    return (
        <div className={fav.emptyCont}>
<img src={bckimg} alt="" />
<p> नमस्ते <span>" {favList.username} " </span>Add Your Favourite Movie Here.</p>
        </div>
    )
   }
  return (
    <div>FavouritePage</div>
  )
}

export default FavouritePage