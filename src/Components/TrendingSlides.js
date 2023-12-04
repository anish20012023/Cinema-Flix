import React from 'react'
import slide from './TrendingSlide.module.css'
import { type } from '@testing-library/user-event/dist/type';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
function TrendingSlides({ popularMovie }) {
  const movieSlide=[...popularMovie].slice(0,9);
 
    return (
       <>
        <div className={slide.slideCont}>
         

         {
              movieSlide.map((item, id) => {
                  return (
                      <div className={slide.slide}>
                          <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : '../images/banner1.jpg'} alt="" />
                          <div className={slide.about}>
                              <h2 key={id}>{item.original_title}</h2>
                              <p> Rating:  <span>{item.vote_average.toFixed(1)} <i className="fa-solid fa-star" style={{color:'#fcc603'}}></i></span></p>

                          </div>



                      </div>
                  )
              })
          }
        
      </div>
     </>


    )
}

export default TrendingSlides