import React from 'react'
import { useState } from 'react'
import validate from './validation'

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
    <div className='form-div'>
        <form onSubmit={() => handleSubmit(userData)} className='form'>
            <label>Username</label>
            <input 
                type="text" 
                value={userData.username}
                name='username'
                onChange={(e) => handleOnChange(e)}
                className = {errors.username && 'warning'}
            />
            {errors.username ? <p className='danger'>{errors.username}</p> : ''}
            <label>Password</label>
            <input 
                type="text" 
                value={userData.password}
                name='password'
                onChange={(e) => handleOnChange(e)}
                className = {errors.password && 'warning'}
            />
            {errors.password ? <p className='danger'>{errors.password}</p> : ''}
            <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Form