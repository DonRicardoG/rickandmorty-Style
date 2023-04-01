import React from 'react'
import { useState } from 'react'
import validate from './validation'
import style from '../Form/form.module.css'

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username: '',
        password:'' 
    })

    const[errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleOnChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
        })

        setErrors(
            validate({
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
    }

    const handleSubmit = (userData) =>{
        login(userData);
    }

    
    
  return (
    <div className={style.formDiv}>
        <div className={style.img}>

        </div>
        <div className={style.loginPart}>
            <div>
                <h1>Log in</h1>
                <p>Know better your favorite characters</p>
            </div>
            <form onSubmit={() => handleSubmit(userData)} className={style.form}>
                <input 
                    type="text" 
                    value={userData.username}
                    name='username'
                    onChange={(e) => handleOnChange(e)}
                    className = {errors.username && style.warning}
                    placeholder='Email'
                />
                {errors.username ? <p className={style.danger}>{errors.username}</p> : ''}
                <input 
                    type="text" 
                    value={userData.password}
                    name='password'
                    onChange={(e) => handleOnChange(e)}
                    className = {errors.password && style.warning}
                    placeholder='Password'
                />
                {errors.password ? <p className={style.danger}>{errors.password}</p> : ''}
                <button type='submit'>Log in</button>
            </form>
        </div>
        
    </div>
  )
}

export default Form