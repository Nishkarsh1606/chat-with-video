import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import React, { useState } from 'react'
import './Home.css'

function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const googleSVGURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmYmMwMmQiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTIJczUuMzczLTEyLDEyLTEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTIuOTU1LDQsNCwxMi45NTUsNCwyNHM4Ljk1NSwyMCwyMCwyMAlzMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNlNTM5MzUiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOQlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2CWMtNS4yMDIsMC05LjYxOS0zLjMxNy0xMS4yODMtNy45NDZsLTYuNTIyLDUuMDI1QzkuNTA1LDM5LjU1NiwxNi4yMjcsNDQsMjQsNDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVjMCIgZD0iTTQzLjYxMSwyMC4wODNMNDMuNTk1LDIwTDQyLDIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MQljMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD4KPC9zdmc+"
  function handleSignInWithGoogle() {
    signInWithPopup(auth, provider).then(() => {
      console.log('Successfully logged in')
    }).catch((err) => {
      alert(`Error: ${err}`)
    })
  }

  function handleSignUpWithEmail() {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log('Successfully logged in')
    }).catch((err) => {
      alert(`Error: ${err}`)
    })
  }

  function handleSignInWithEmail() {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log('Successfully logged in')
    }).catch((err) => {
      alert(`Error: ${err}`)
    })
  }

  return (
    <div className='Home'>
      <p>Sign Up for Supachat 🔥</p>
      <p>Private, encrypted, unlimited <br /> free chats & video calls</p>
      <div className="sign-in-email">
        <p>Enter Full Email</p>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <p>Enter Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSignUpWithEmail}>{`New User (Sign Up)`}</button>
        <button onClick={handleSignInWithEmail}>Already a user? Sign In</button>
      </div>
      <p>Or</p>
      <div className="sign-in-providers">
        <button onClick={handleSignInWithGoogle}>Sign In With Google <span><img alt="GooglesvgImg" style={{ width: '24px', padding: '0px', marginLeft: '6px' }} src={googleSVGURL} /></span></button>
      </div>
    </div>
  )
}

export default Home