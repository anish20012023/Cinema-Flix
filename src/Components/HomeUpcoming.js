import React from 'react'
import {  useRouteLoaderData } from 'react-router-dom';

import HomeMoviesList from './HomeMoviesList';

function HomeUpcoming() {
 
  const data = useRouteLoaderData('homeUpComing').results.slice(0, 10);

 
  return (
    <HomeMoviesList data={data} type="Upcoming Movies" path='upcoming/1'/>

  )
}

export default HomeUpcoming;

export async function loader() {

  let resp = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US`);
  if (!resp.ok) {
    throw new Error("this is error")
  }
  let data = resp.json();

  return data;


}