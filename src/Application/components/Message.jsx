import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'
import '../../App.css'

function Message({authorName,messageBody,currentUID, authorID,profileURL}) {
  return(
    <div className={currentUID===authorID?('current-user-message'):('friend-message')}>
      {profileURL ? (<img src={profileURL} className='profile-picture' />): (<Avatar/>) }
      <p>{messageBody}</p>
    </div>
  )
}

export default Message