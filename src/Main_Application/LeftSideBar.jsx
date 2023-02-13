import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import Friend from './components/Friend';
import './MainApp.css'
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase';

function LeftSideBar() {
    //add use effect to filter list of friends to be rendered when the search input changes
    const dispatch=useDispatch()
    const [searchQuery, setSearchQuery] = useState('')
    const selectCurrentChannel=()=>{

    }
    return (
        <div className='LeftSideBar'>
            <div className="leftsidebar-header">
                <div>
                    <Avatar />
                </div>
                <div className='leftsidebar-icons'>
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
                    <Friend nameOfFriend={'hello'} lastMessage={'Hello World'} avatarURL={'hel'} />
                </div>
                <div>
                    <Friend nameOfFriend={'hello'} lastMessage={'Hello World'} avatarURL={'hel'} />
                </div>
                <div>
                    <Friend nameOfFriend={'hello'} lastMessage={'Hello World'} avatarURL={'hel'} />
                </div>
            </div>
            <div className="sign-out">
                <button onClick={()=>signOut(auth)}>Sign Out</button>
            </div>
        </div>
    )
}

export default LeftSideBar