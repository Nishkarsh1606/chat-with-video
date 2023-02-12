import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

function MainApp() {
  return (
    <div className='MainApp'>
      <button onClick={()=>signOut(auth)}>Sign Out</button>
    </div>
  )
}

export default MainApp