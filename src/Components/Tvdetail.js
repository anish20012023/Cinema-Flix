import React from 'react';
import tv from './TvDetail.module.css'
import { useLoaderData } from 'react-router-dom';
import bckimg from '../banner1.jpg'

function Tvdetail() {
    const tvdata=useLoaderData()
    console.log(tvdata)
  return (
    <div className={tv.container} >

            <img className={tv.backImage} src={tvdata.backdrop_path ? `https://image.tmdb.org/t/p/original/${tvdata.backdrop_path}` : bckimg} alt="" />
            <div className={tv.detailCont}>
                <div className={tv.detail}>
                    <div className={tv.poster}>
                        <img src={tvdata.poster_path ? `https://image.tmdb.org/t/p/original/${tvdata.poster_path}` : bckimg} alt="" />
                    </div>
                    <div className={tv.about}>
                        <h3 id={tv.title}>{tvdata.name}</h3>
                        <p id={tv.tagline}><i>{tvdata.tagline}</i></p>
                        <p id={tv.genre}>

                            {
                                tvdata.genres.map((item) => {
                                    return (
                                        <>
                                        <span>{item.name}</span></>
                                    )
                                })
                            }
                        </p>
                        <div id={tv.overview}>
                            <h3>Overview</h3>
                            <p>{tvdata.overview}</p>
                        </div>
                        
                        {tvdata.created_by.length!=0?(
                             <p id={tv.creator}>Created By:  
                             {
                                 tvdata.created_by.map((person)=>{
                                 
                                     return(
                                         <span className={tv.person}> {person.name},</span>
                             
                                     )
                                 })
                             }
                         </p>


                        ):undefined}
                       

                        <p id={tv.rate} className={tv.extra}>
                            <span>Rating: <span className={tv.value}>{tvdata.vote_average.toFixed(1)} <i className="fa-solid fa-star" style={{ color: '#fcc603' }}></i></span> </span>

                            <span> Vote Count: <span className={tv.value}>{tvdata.vote_count}</span></span>
                           
                            
                        </p>
                        <p id={tv.seasons} className={tv.extra}>
                            
                        <span> Total Seasons: <span className={tv.value}> {tvdata.number_of_seasons}</span></span>
                            <span> Total Episodes: <span className={tv.value}> {tvdata.number_of_episodes}</span></span>

                            
                        </p>
                        <p id={tv.statdetail} className={tv.extra}><span>status: <span className={tv.value}>{tvdata.status}</span></span>
                            <span> Last Air Date:  <span className={tv.value}> {tvdata.last_air_date}</span></span>

                        </p>
                        <div className={tv.btns}>
                            {tvdata.homepage ? <a className={tv.button} href={tvdata.homepage} target='_blank'>More Details</a> : undefined}
                        </div>


                    </div>
                </div>

            </div>

        </div>
  )
}

export default Tvdetail;
export async function loader({ request, params }) {
    let id = params.tvid
    let resp = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US`);
    let data = resp.json();
    return data;

}