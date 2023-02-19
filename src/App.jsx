import { Route, Routes } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import Home from './Landing_Page/Home'
import Error from './Landing_Page/Error'
import Feed from './Main_Application/Feed'
import './App.css'
import { auth } from '../firebase'

function App() {
  const [user, loading, error] = useAuthState(auth)
  //Load the application if a user has successfully signed in
  if (user) {
    return (
      <Routes>
        <Route path='/dashboard' element={<Feed />} />
        <Route path='*' element={<Feed />} />
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
  else{
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/error' element={<Error />} />
        {/* <Route path='*' element={<Home/>}/> */}
      </Routes>
    )
  }
}

export default App
