import { Avatar } from '@mui/material'
import React from 'react'
import './Friend.css'

function Friend({nameOfFriend,lastMessage,avatarURL, uid}) {
  const select='uid'
  return (

    <div className="Friend">
      <Avatar/>
      <div className="message-info">
        <p>{nameOfFriend}</p>
        <p>{lastMessage}</p>
      </div>
    </div>
  )
}

export default Friend