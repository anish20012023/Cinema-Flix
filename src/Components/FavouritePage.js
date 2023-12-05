import React from 'react'
import fav from './favouritePage.module.css';
import bckimg from '../banner1.jpg'
import { Link } from 'react-router-dom';

function FavouritePage() {
    let favList = JSON.parse(localStorage.getItem('currentUser'));
    let existuser=JSON.parse(localStorage.getItem('user')); // allusers
    let currentUserData=existuser.find((user)=>user.username===favList.username); // logedin current user
    let otherUserData=existuser.filter((user)=>user.username!=favList.username) // other user
    console.log("current user", currentUserData)
    
    if (currentUserData.favourite.length == 0) {
        return (
            <div className={fav.emptyCont}>
                <img src={bckimg} alt="" />
                <p> नमस्ते <span>" {favList.username} " </span>Add Your Favourite Movie Here.</p>
            </div>
        )
    }



    function handleRemove(id){
        const updatedFavList=currentUserData.favourite.filter((item)=>item.id!=id);
        currentUserData.favourite=updatedFavList;
        localStorage.setItem('user', JSON.stringify([...otherUserData, currentUserData]))
     


console.log("current user", currentUserData)
console.log("other user", otherUserData)
        


       
        
    }
    
    return (
        <>
        <div className={fav.banner} >
        <img src={ currentUserData.favourite[currentUserData.favourite.length-1].background?`https://image.tmdb.org/t/p/original/${currentUserData.favourite[currentUserData.favourite.length-1].background}`:bckimg} alt="" />
    </div>
        <div className={fav.favContainer}>
           <div className={fav.headList}>
           <h2>Your Favourite Movies and shows</h2>

<div className={fav.favMovieList}>


{
     currentUserData.favourite.map(movie => {
         return (
             
                 <div className={fav.tile}>
                     <img  src={movie.poster ? `https://image.tmdb.org/t/p/original/${movie.poster}` : bckimg} alt="" />
                     <div className={fav.about}>
                         <h3 id={fav.title}>{movie.title}</h3>
                         <p id={fav.rating}>  <span><i className="fa-solid fa-star"></i> <span id={fav.rate}>{movie.rating}</span></span></p>
                     </div>
                     <div className={fav.overlay}>
                     <Link className={fav.btn} to={`${movie.id}`}> More info   </Link>
                     <button className={fav.btn} onClick={()=>{handleRemove(movie.id)}}>Remove</button>
                     </div>
                 </div>
           
         )
     })
 }
</div>
           </div>
        </div>
        </>
    )
}

export default FavouritePage