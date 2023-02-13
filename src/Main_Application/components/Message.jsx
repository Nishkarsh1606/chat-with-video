import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

function Message({messageBody,currentUID, authorID}) {
  if(currentUID===authorID){
    return (
      <div className='current-user-message'>
          <Avatar/>
          <p>{messageBody}</p>
      </div>
    )
  }else{
    return (
      <div className='friend-message'>
        <Avatar/>
        <p>{messageBody}</p>
      </div>
    )
  }
}

export default Message