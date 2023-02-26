import React, { useEffect, useState } from 'react'
import Friend from './components/Friend';
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import KeyIcon from '@mui/icons-material/Key';
import AddIcon from '@mui/icons-material/Add';
import '../App.css'

function LeftSideBar() {
    //add use effect to filter list of friends to be rendered when the search input changes
    const [searchQuery, setSearchQuery] = useState('')
    const [welcomeMessage,setWelcomeMessage]=useState('')
    const [friendList,setFriendList]=useState([])
    const getFirstName=auth.currentUser.displayName.split(' ')[0]
    const profilePictureURL=auth.currentUser.photoURL.toString()
    
    const friendListRef=collection(db,`/ConnectionsMap/${auth.currentUser.uid}/friends`)
    const friendListRefDesc=query(friendListRef,orderBy('serverTime','desc'))

    useEffect(()=>{
        setWelcomeMessage(`Welcome ${getFirstName}!`)
        const timeoutID=setTimeout(() => {
            setWelcomeMessage('')
        }, 2000);
        onSnapshot(friendListRefDesc,(snapshot)=>{
            setFriendList(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    data:doc.data()
                }
            )))
        })
        return ()=>{
            clearTimeout(timeoutID)
        }
    },[])

    const handleAddFriends=()=>{
        const friendUID=prompt('Enter friends secret key 👇')
    }

    const displayKey=()=>{
        alert(`Here's your secret key. Only share this with your friends: ${auth.currentUser.uid}`)
    }

    const handleSignOut=()=>{
        // First clear the storage token that says --> first sign in 
        signOut(auth)
    }
    console.log(auth.currentUser.uid)

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
            <hr className='hr'/>
            <div className="leftsidebar-search">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={`Search`} />
            </div>
            <div className="leftsidebar-friends">
                {/* Map all friends */}
                {
                    friendList.map(({id,data:{friendName, avatarURL, roomID}})=>(
                        <li key={id}>
                            <Friend nameOfFriend={friendName} avatarURL={avatarURL} roomID={roomID}/>
                        </li>
                    ))
                }
            </div>
            <div className="sign-out items-center-space-between">
                <button onClick={handleSignOut}>Sign Out</button>
                <div style={{cursor:'pointer'}} onClick={displayKey}><KeyIcon/></div>
            </div>
        </div>
    )
}

export default LeftSideBar