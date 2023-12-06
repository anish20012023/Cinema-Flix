import {  createHashRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import RootHomeLayout from "./Pages/RootHomeLayout";
import Home from "./Pages/Home";
import PopularPage from './Pages/PouplarPage'
import DetailPage from './Pages/DetailPage'
import Movies from "./Pages/Movies";
import UpcomingPage from "./Pages/UpcomingPage";
import TvshowPage from "./Pages/TvshowPage";
import { loader as slideLoader } from "./Pages/Home";
import { loader as MovieLoader } from './Pages/Movies'
import { loader as MovieDetailLoader } from './Components/MovieDetail'
import { loader as popularmovieLoader } from './Pages/PouplarPage'
import { loader as upcomingmovieLoader } from './Pages/UpcomingPage'
import { loader as tvShowLoader } from './Pages/TvshowPage'
import Errorpage from "./Pages/Errorpage";
import Tvdetail from "./Components/Tvdetail";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import FavouritePage from "./Components/FavouritePage";
import HomeUpcoming from "./Components/HomeUpcoming";
import {loader as HomeUpcomingLoader} from './Components/HomeUpcoming'
import {loader as TvDetailLoader} from './Components/Tvdetail'


const router = createHashRouter(
  [
    { path: '/', element: <LoginPage />, errorElement: <Errorpage /> },
    { path: '/signup', element: <SignupPage /> },

    {
      path: '/user',
      element: <RootHomeLayout />,
      errorElement: <Errorpage />,


      children: [
        {
          path: '/user',
          errorElement: <Errorpage />,
          children: [
            {
              index: '/user', element: <Home />, loader: slideLoader,
              children: [
                {index:true, element: <HomeUpcoming />,loader:HomeUpcomingLoader, id:"homeUpComing" },
                
              ]
            },
            {path:'/user/:movieId' , element:<DetailPage/>, loader:MovieDetailLoader},
            { path: 'movies/:page', element: <Movies />, loader: MovieLoader, },
            { path: 'movies/:page/:movieId', element: <DetailPage />, loader: MovieDetailLoader },

            { path: 'popular/:page', element: <PopularPage />, loader: popularmovieLoader, },
            { path: 'popular/:page/:movieId', element: <DetailPage />, loader: MovieDetailLoader },

            { path: 'upcoming/:page', element: <UpcomingPage />, loader: upcomingmovieLoader, },
            { path: 'upcoming/:page/:movieId', element: <DetailPage />, loader: MovieDetailLoader },

            { path: 'tv/:page', element: <TvshowPage />, loader: tvShowLoader },
            { path: 'tv/:page/:tvid', element: <Tvdetail />, loader:TvDetailLoader},
            { path: 'favourite', element: <FavouritePage /> },
            { path: 'favourite/:movieId', element: <DetailPage />, loader: MovieDetailLoader }


          ]
        },



      ]
    },

  ]
)
function App() {


  return (
    <RouterProvider router={router} />


  );
}

export default App;
