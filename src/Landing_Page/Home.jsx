import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import React from 'react'

function Home() {
  function handleSignIn(){
    signInWithPopup(auth,provider)
  }
  return (
    <div className='Home'>
        <p>Hello Home</p>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Home