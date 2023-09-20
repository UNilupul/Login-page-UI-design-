import React, { useState } from 'react'
import './login.css'
import loginImage from '../assets/login.png'
import googleImage from '../assets/google.png'
import Validation from '../validation'

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] })
    }

    function handleValidation(e) { 
        e.preventDefault();
        setErrors(Validation(values))
    }

    return (
        <div>
            <div class="login_page">
                <div class="body-left-container">
                    <img className='login-img' src={loginImage} />
                </div>

                <div class="body-right-container">

                    <div className='login-form-container'>
                        <h1 className='heading'>Welcome Back!</h1>

                        <form onChange={handleValidation}>
                            <div className='login-form_div'>
                                <h1 className='login-form-heading'>Login</h1>

                                <div className='login-form-inputs'>
                                    <label className='label-email'>Email:</label>
                                    <input type='email' className='input-email' id='email' name='email' value={values.username} onChange={handleInput} />
                                    {errors.email && <p style={{color:'Red'}}>{errors.email}</p>}

                                    <label className='label-password'>Password:</label>
                                    <input type='password' className='input-password' id='password' name='password' onChange={handleInput} />
                                    {errors.password && <p style={{color:'Red', fontWeight:'normal'}}>{errors.password}</p>}
                                </div>

                                <a className='forgot-password' href="/forgot-password">Forgot password?</a>

                                <button className='login-btn'>Login</button>
                            </div>
                        </form>

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
