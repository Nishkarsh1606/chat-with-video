import { Route, Routes } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import Home from './Landing_Page/Home'
import Error from './Landing_Page/Error'
import MainApp from './Main_Application/MainApp'
import './App.css'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

function App() {
  const [user, loading, error] = useAuthState(auth)
  //Load the application if a user has successfully signed in
  if (user) {
    return (
      <Routes>
        <Route path='/dashboard' element={<MainApp />} />
        <Route path='*' element={<MainApp />} />
      </Routes>
    )
  }

  //Show loading while the user is trying to log in and request is being authenticated
  else if (loading) {
    return (
    <>
    </>
    )
  }

  //Show error if user is unable to login to due to some issues
  else if (error) {
    return (
      <Routes>
        <Route path='/error' element={<Error />} />
      </Routes>
    )
  }
  //The Landing Page of the app
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/error' element={<Error />} />
      {/* <Route path='*' element={<Home/>}/> */}
    </Routes>
  )
}

export default App
