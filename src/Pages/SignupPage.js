import React, { useState } from 'react'
import bckimg from '../banner1.jpg'
import logo from '../logo.png'
import { Link, useNavigate } from 'react-router-dom';



function SignupPage() {
    const [err, setErr] = useState(false);
    const [typeerr, setTyperr] = useState("")
    const navigate = useNavigate()
    function handleSignup(e) {
        let existData = JSON.parse(localStorage.getItem('user')) || [];
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        if (data.username.trim() === '' || data.password.trim() === '') {
            setTyperr("empty");
            setErr(true)
        }
        else {
            let isPresent = existData.find(user => user.username === data.username);
            if (isPresent) {
                setErr(true)
                setTyperr("exist")
                e.target.reset();

            }
            else if (data.password === data.confirmPassword) {


                setErr(false)
                setTyperr("")
                existData.push({ ...data, favourite: [] })
                localStorage.setItem('user', JSON.stringify(existData))
                navigate("/")


            }
            else {
                setErr(true)
                setTyperr("notmatch")

            }

        }
    }


    function handleBlur() {
        setErr(false)
        setTyperr("")
    }
    return (


        <div className="login-page">

            <img src={bckimg} alt="" />

            <div className="login-div">
            <Link id="back" to='/'><i class="fa-solid fa-arrow-left"></i></Link>
                <img src={logo} width={200} alt="" />
                <h2>Welcome</h2>
                <p>Register To Continue</p>

                <form className='login-form' onSubmit={handleSignup}>
                    <span>  <i class="fa-solid fa-user"></i> <input onFocus={handleBlur} type="text" name="username" placeholder='Username' /></span>

                    <span><i class="fa-solid fa-lock"></i> <input onFocus={handleBlur} type="password" name="password" placeholder='Password' /></span>
                    <span><i class="fa-solid fa-lock"></i> <input onFocus={handleBlur} type="password" name="confirmPassword" placeholder='Confirm Password' /></span>
                    {
                        err && typeerr === 'empty' ? <p id='error' >Empty Credentials</p> : err && typeerr === 'exist' ? <p id='error' >User already exist</p> :
                            err && typeerr === 'notmatch' ? <p id='error' >Password does not match</p> :
                                undefined}
                    <button type='submit'>Signup</button>
                 
                </form>
            </div>

        </div>
    )
}

export default SignupPage