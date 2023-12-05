import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom';
import homeup from './HomeMovieList.module.css'

import banner from '../banner1.jpg'
function HomeMoviesList({data, type, path}) {
    const [detail, setDetail] = useState()
  
    const navigate = useNavigate()
    function handleBtn() {
      
      navigate(`${path}`)
  
    }
    function handleListBtn(id){
    let clickedMovie=data.find(item=>item.id===id);
   setDetail(clickedMovie)
  
    }
  return (
    
    <div className={homeup.container}>
      <div id={homeup.header}>
        <h2>{type}</h2>
        <button onClick={handleBtn}><i class="fa-solid fa-greater-than"></i></button>
      </div>
     {detail?
     (
      <div id={homeup.banner}>
        {detail?<img src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt='none'/>:undefined}
        <div className={homeup.about}>
                <h2 id={homeup.title}>{detail.title}</h2> 
                <p id={homeup.overview}>{detail.overview}</p> 
                <p id={homeup.rating}> <i className="fa-solid fa-star" style={{color:'#fcc603'}}></i><span>{detail.vote_average.toFixed(1)} </span></p>
                <Link id={homeup.moreinfo} to={`/user/${detail.id}`} >More Info</Link>
                </div>

      </div>
      ):
      undefined}
      <div id={homeup.listContainer}>
        {
          data.map((item) => {
            return (
              <button key={item.id} onClick={()=>{handleListBtn(item.id)}}>
                <div className={homeup.list}>
                  {item.poster_path ? <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} /> : <img src={banner} />}
                </div>
                

              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomeMoviesList