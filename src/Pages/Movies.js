import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieTile from '../Components/MovieTile'

function Movies() {

    const movieList = useLoaderData().results



    return (
        <MovieTile movieList={movieList} type="movies" heading="Latest Release" />


    )
}

export default Movies;

export async function loader({ request, params }) {
    const pageNo = params.page
    if (isNaN(pageNo)) {
        throw new Error("not valid page number")
    }

    let resp = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=87ff96249ebc05f16733321cd1ee38df&language=en-US&page=${pageNo}`);
    if (!resp.ok) {
        throw new Error("this is error")
    }
    let data = resp.json();

    return data;


}