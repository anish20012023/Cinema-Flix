import React, { useState } from 'react'
import bckimg from '../banner1.jpg'
import logo from '../logo.png'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()
    const [err, setErr] = useState(false);
    const [typeerr, setTyperr] = useState("")
    function handleLogin(e) {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        if (data.username.trim() === '' || data.password.trim() === '') {
            setTyperr("empty");
            setErr(true)
        }
        else {
            if (!localStorage.getItem('user')) {
                setErr(true)
                setTyperr("notexist")
            }
            else {
                const existData = JSON.parse(localStorage.getItem('user'));
                let isPresent = existData.find(user => user.username === data.username && user.password === data.password);
                if (isPresent) {
                    setErr(false)
                    setTyperr("")
                    localStorage.setItem('currentUser', JSON.stringify({ username: isPresent.username, favourite: isPresent.favourite }))
                    navigate('/user')


                }
                else {
                    setErr(true)
                    setTyperr("notexist")

                }
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
                <img src={logo} width={200} alt="" />
                <h2>Welcome Back</h2>
                <p>Login To Continue</p>
                <form className='login-form' onSubmit={handleLogin}>
                    <span>  <i class="fa-solid fa-user"></i> <input onFocus={handleBlur} type="text" name="username" placeholder='Username' autocomplete="off"  /></span>

                    <span><i class="fa-solid fa-lock"></i> <input onFocus={handleBlur} type="password" name="password" placeholder='Password' /></span>
                    {err && typeerr === 'empty' ? <p id='error' >Empty Credentials</p> :
                        err && typeerr === 'notexist' ? <p id='error' >User doesn't exist</p> :
                            undefined}
                    <button type='submit'>Login</button>
                </form>
            </div>
            <span id='newUser'><p>Don't have an account ? <Link to="/signup">Signup</Link></p></span>
        </div>
    )
}

export default LoginPage