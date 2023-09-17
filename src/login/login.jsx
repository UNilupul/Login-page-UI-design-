import React from 'react'
import './login.css'
import loginImage from '../assets/login.png'

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

                            <button className='login-btn'>Login</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
