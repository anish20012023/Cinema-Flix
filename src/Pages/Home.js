import React, { useState } from 'react'
import homecss from './Home.module.css'
import { useLoaderData, useParams , Link} from 'react-router-dom';
import TrendingSlides from '../Components/TrendingSlides';

function Home() {
    
    const popularMovie=useLoaderData().results;
    
    
    return (
        <>
        <TrendingSlides popularMovie={popularMovie} />
        <p>helo</p>
        </>
            
            
           
    )
}

export default Home;

export async function loader() {
   
    let resp = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US&page=1`);
    let data=resp.json();
    return data;
}