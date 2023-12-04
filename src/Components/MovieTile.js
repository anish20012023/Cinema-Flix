import React from 'react'
import  mstyle from './movietile.module.css'
import banner from '../banner1.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'

function MovieTile({movieList, type, heading}) {
    const { page } = useParams()
    const navigate = useNavigate()
    
    function handleNext() {


        navigate(`/user/${type}/${Number(page) + 1}`)



    }
    function handlePrev() {


        navigate(`/user/${type}/${Number(page) - 1}`)

    }
  return (  

    <>
            <div className={mstyle.banner} >
                <img src={ movieList[Math.floor(Math.random() * 15)].backdrop_path?`https://image.tmdb.org/t/p/original/${movieList[Math.floor(Math.random() * 15)].backdrop_path}`:banner} alt="" />
            </div>
            <div className={mstyle.container}>
                <h2 className={mstyle.header}>{heading}</h2>
                <div className={mstyle.movieList}>
                    {
                        movieList.map((movie) => {
                            return (
                                <Link to={`${movie.id}`}>
                                    
                                    <div className={mstyle.movieTile}>
                                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '../images/banner1.jpg'} alt="" width={50} />
                                        <span className={mstyle.about}>
                                            <h3 id={mstyle.title}>{type==='tv'?movie.original_name:movie.title}</h3>
                                            <p id={mstyle.date}>{type==='tv'?movie.first_air_date:movie.release_date}</p>
                                            <p id={mstyle.rating}>  <span><i className="fa-solid fa-star" style={{ color: '#fcc603' }}></i> <span id={mstyle.rate}>{movie.vote_average.toFixed(1)}</span></span></p>


                                        </span>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className={mstyle.btn}>
                {Number(page) === 1 ? undefined : <button onClick={handlePrev}>Prev</button>}

                <span>{page}</span>
                <button onClick={handleNext}>Next</button>
            </div>

        </>
  )
}

export default MovieTile