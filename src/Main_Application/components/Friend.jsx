import { Avatar } from '@mui/material'
import React from 'react'
import './Friend.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel } from '../../AppSlice/AppSlice';


function Friend({nameOfFriend,lastMessage,avatarURL, uid}) {
  const currentChannel=useSelector((state)=>state.app.currentChannel)
  const dispatch=useDispatch()
  const highlightChannel=()=>{
    dispatch(selectChannel(uid))
  }
  if(currentChannel!==uid){
    return (
      <div className="Friend Friend-hover" onClick={highlightChannel}>
        <Avatar/>
        <div className="message-info">
          <p>{nameOfFriend}</p>
          <p>{lastMessage}</p>
        </div>
      </div>
    )
  }else{
    return (
      <div className="Friend Friend-highlighted" onClick={highlightChannel}>
        <Avatar/>
        <div className="message-info">
          <p>{nameOfFriend}</p>
          <p>{lastMessage}</p>
        </div>
      </div>
    )
  }
}

export default Friend