import React from 'react'
import './login.css'
import loginImage from '../assets/login.png'
import googleImage from '../assets/google.png'

export default function Login() {
    return (
        <div>
            <div class="login_page">
                <div class="body-left-container">
                    <img className='login-img' src={loginImage} />
                </div>

                <div class="body-right-container">

                    <div className='login-form-container'>
                        <h1 className='heading'>Welcome Back!</h1>

                        <div className='login-form_div'>
                            <h1 className='login-form-heading'>Login</h1>

                            <div className='login-form-inputs'>
                                <label className='label-email'>Email:</label>
                                <input type='email' className='input-email' id='email' />
                                <label className='label-password'>Password:</label>
                                <input type='password' className='input-password' id='password' />
                            </div>

                            <a className='forgot-password' href="/forgot-password">Forgot password?</a>

                            <button className='login-btn'>Login</button>
                        </div>

                        <div className='other-logins'>
                            <p className='other-login_or'>or</p>
                            <img src={googleImage} className='google-login-img' />
                        </div>

                        <p className='dont-have-account'>Don't have an Account?
                            <a href='/register'>Register</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
