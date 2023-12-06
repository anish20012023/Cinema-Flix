import React, { useState, useEffect } from 'react';
import fav from './favouritePage.module.css';
import bckimg from '../banner1.jpg';
import { Link } from 'react-router-dom';

function FavouritePage() {
    const presentUser=JSON.parse(localStorage.getItem('currentUser')).username
    const existUser=JSON.parse(localStorage.getItem('user'))
    const [currentUserData, setCurrentUserData] = useState(null);
    const [otherUserData, setOtherUserData] = useState([]);

  

    useEffect(() => {
     
        if (existUser && presentUser) {
            const currentUser = existUser.find((user) => user.username === presentUser);
            setCurrentUserData(currentUser);
            setOtherUserData(existUser.filter((user) => user.username !== presentUser));
        }
    }, []);


    if (!currentUserData || currentUserData.favourite.length === 0) {
        return (
            <div className={fav.emptyCont}>
                <img src={bckimg} alt="" />
                <p> नमस्ते <span>" {presentUser} " </span>Add Your Favourite Movie Here.</p>
            </div>
        );
    }

    function handleRemove(id) {
    
        const updatedFavList = currentUserData.favourite.filter((item) => item.id !== id);
        setCurrentUserData({ ...currentUserData, favourite: updatedFavList });
        const updatedUserData = [...otherUserData, { ...currentUserData, favourite:updatedFavList }];
        localStorage.setItem('user', JSON.stringify(updatedUserData));
    }

    return (
        <>
            <div className={fav.banner} >
                <img src={currentUserData.favourite[currentUserData.favourite.length - 1].background ? `https://image.tmdb.org/t/p/original/${currentUserData.favourite[currentUserData.favourite.length - 1].background}` : bckimg} alt="" />
            </div>
            <div className={fav.favContainer}>
                <div className={fav.headList}>
                    <h2>Your Favourite Movies and shows</h2>

                    <div className={fav.favMovieList}>


                        {
                            currentUserData.favourite.map(movie => {
                                return (

                                    <div className={fav.tile}>
                                        <img src={movie.poster ? `https://image.tmdb.org/t/p/original/${movie.poster}` : bckimg} alt="" />
                                        <div className={fav.about}>
                                            <h3 id={fav.title}>{movie.title}</h3>
                                            <p id={fav.rating}>  <span><i className="fa-solid fa-star"></i> <span id={fav.rate}>{movie.rating}</span></span></p>
                                        </div>
                                        <div className={fav.overlay}>
                                            <Link className={fav.btn} to={`${movie.id}`}> More info   </Link>
                                            <button className={fav.btn} onClick={() => { handleRemove(movie.id) }}>Remove</button>
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