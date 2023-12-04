import React from 'react';
import dcss from './MovieDetail.module.css'
import { useLoaderData } from 'react-router-dom';
import bckimg from '../banner1.jpg'

function MovieDetail({ id }) {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className={dcss.container} >

            <img className={dcss.backImage} src={data.backdrop_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` :bckimg} alt="" />
            <div className={dcss.detailCont}>
                <div className={dcss.detail}>
                    <div className={dcss.poster}>
                        <img src={data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` :bckimg} alt="" />
                    </div>
                    <div className={dcss.about}>
                        <h3 id={dcss.title}>{data.title}</h3>
                        <p id={dcss.tagline}><i>{data.tagline}</i></p>
                        <p id={dcss.genre}>

                            {
                                data.genres.map((item) => {
                                    return (
                                        <span>{item.name}</span>
                                    )
                                })
                            }
                        </p>
                        <div id={dcss.overview}>
                            <h3>Overview</h3>
                            <p>{data.overview}</p>
                        </div>

                        <p id={dcss.rate} className={dcss.extra}>
                            <span>Rating: <span className={dcss.value}>{data.vote_average.toFixed(1)} <i className="fa-solid fa-star" style={{ color: '#fcc603' }}></i></span> </span>

                            <span> Vote Count: <span className={dcss.value}>{data.vote_count}</span></span>
                            <span> Budget: <span className={dcss.value}>{data.budget} cr</span></span>
                        </p>
                        <p id={dcss.statdetail} className={dcss.extra}><span>status: <span className={dcss.value}>{data.status}</span></span>
                            <span> Release Date: <span className={dcss.value}> {data.release_date}</span></span>
                            <span> Runtime: <span className={dcss.value}> {data.runtime} Min</span></span>
                            
                        </p>
                        <div className={dcss.btns}>
                            <button className={dcss.button}>Favourite</button>
                           {data.homepage?<a className={dcss.button} href={data.homepage} target='_blank'>More Details</a>:undefined}
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default MovieDetail;
export async function loader({ request, params }) {
    let id = params.movieId
    let resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US`);
    let data = resp.json();
    return data;

}