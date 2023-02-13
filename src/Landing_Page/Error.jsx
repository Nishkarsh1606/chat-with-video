import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Error() {
    const navigate=useNavigate()
    useEffect(()=>{
        const setTimeOutId=setTimeout(()=>{
            navigate('/')
        },2000)
        return ()=>{
            clearTimeout(setTimeOutId)
        }
    },[])
  return (
    <div className='Error'>
        <p>Sorry, something went wrong 😢</p>
        <p>We are redirecting you to the main page.</p>
    </div>
  )
}

export default Error