import React from 'react'

import { useLoaderData} from 'react-router-dom';
import TrendingSlides from '../Components/TrendingSlides'


const HomeMovieList= React.lazy(()=>import ('../Components/HomeMoviesList'))
const HomeUpcoming =React.lazy(()=>import('../Components/HomeUpcoming'))

function Home() {
    
    const popularMovie=useLoaderData().results;
    const data = popularMovie.slice(0, 10);
 
   
    
    
    return (
        <>
        <TrendingSlides popularMovie={popularMovie} />
       
        <HomeUpcoming/>
    
        <HomeMovieList data={data} type="Latest Movies" path='movies/1'/>

        </>
            
            
           
    )
}

export default Home;

export async function loader() {
   
    let resp = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US&page=1`);
    let data=resp.json();
    return data;
}