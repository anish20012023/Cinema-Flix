import React from 'react'
import backgroundImg from '../banner1.jpg'

function Errorpage() {
  return (
    <div className='errorPage-Cont'>

        < img className='error-bck-img' src={backgroundImg} alt="" />
        <div className="error-detail">

            <p>Resource Not Found</p>
        </div>
    </div>
  )
}

export default Errorpage