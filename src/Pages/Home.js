import React from 'react'
import HomeUpcoming from '../Components/HomeUpcoming';
import { useLoaderData} from 'react-router-dom';

const Trendingslides=React.lazy(()=>import('../Components/TrendingSlides'))
const HomeMovieList= React.lazy(()=>import ('../Components/HomeMoviesList'))

function Home() {
    
    const popularMovie=useLoaderData().results;
    const data = popularMovie.slice(0, 10);
 
   
    
    
    return (
        <>
        <Trendingslides popularMovie={popularMovie} />
       
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