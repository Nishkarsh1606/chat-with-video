import KeyIcon from '@mui/icons-material/Key';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import Friend from './components/Friend';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase';
import './MainApp.css'

function LeftSideBar() {
    //add use effect to filter list of friends to be rendered when the search input changes
    const [searchQuery, setSearchQuery] = useState('')
    const [welcomeMessage,setWelcomeMessage]=useState('')
    const getFirstName=auth.currentUser.displayName.split(' ')[0]
    const profilePictureURL=auth.currentUser.photoURL.toString()

    useEffect(()=>{
        setWelcomeMessage(`Welcome ${getFirstName}!`)
        const timeoutID=setTimeout(() => {
            setWelcomeMessage('')
        }, 2000);
        return ()=>{
            clearTimeout(timeoutID)
        }
    },[])

    const handleAddFriends=()=>{
        const friendUID=prompt('Enter friends secret key 👇')
        alert(friendUID)
    }

    const displayKey=()=>{
        alert(`Here's your secret key. Only share this with your friends: ${auth.currentUser.uid}`)
    }

    const handleSignOut=()=>{
        // First clear the storage token that says --> first sign in 
        signOut(auth)
    }

    return (
        <div className='LeftSideBar'>
            <div className="leftsidebar-header items-center-space-between">
                <div>
                    <img alt='profile' src={profilePictureURL} className='profile-picture' />
                    <p>{welcomeMessage}</p>
                </div>
                <div className='leftsidebar-icons' onClick={handleAddFriends}>
                    <AddIcon sx={{ borderRadius: '50px', backgroundColor: 'black', fontSize: '30px' }} />
                </div>
            </div>
            <hr style={{height:'0.1px', borderWidth:'0.1px'}}/>
            <div className="leftsidebar-search">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={`Find and add friends 🔎`} />
            </div>
            <div className="leftsidebar-friends">
                {/* Map all friends */}
                <div>
                    <Friend nameOfFriend={'Test Friend 1'} lastMessage={'Hello World'} avatarURL={'hel'} uid='test'/>
                </div>
                <div>
                    <Friend nameOfFriend={'Test Friend 2'} lastMessage={'Hello World'} avatarURL={'hel'} uid='test2'/>
                </div>
                <div>
                    <Friend nameOfFriend={'Test Friend 3'} lastMessage={'Hello World'} avatarURL={'hel'} uid='test3'/>
                </div>
            </div>
            <div className="sign-out items-center-space-between">
                <button onClick={handleSignOut}>Sign Out</button>
                <div style={{cursor:'pointer'}} onClick={displayKey}><KeyIcon/></div>
            </div>
        </div>
    )
}

export default LeftSideBar