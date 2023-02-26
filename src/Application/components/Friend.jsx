import { Avatar } from '@mui/material'
import React from 'react'
import './Friend.css'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel } from '../../AppSlice/AppSlice';


function Friend({ nameOfFriend, lastMessage, avatarURL, roomID }) {
  const currentChannel = useSelector((state) => state.app.currentChannel)
  const dispatch = useDispatch()
  const highlightChannel = () => {
    dispatch(selectChannel(roomID))
  }
  return (
    <div onClick={highlightChannel}>
      <div className={currentChannel !== roomID ? ('Friend Friend-hover') : ('Friend Friend-highlighted')} onClick={highlightChannel}>
        {
          avatarURL!=='' ?(<img src={avatarURL} className='profile-picture' />) : (<Avatar className='profile-avatar'>{nameOfFriend[0]}</Avatar>)
        }
        <div className="message-info">
          <p>{nameOfFriend}</p>
          <p>{lastMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Friend