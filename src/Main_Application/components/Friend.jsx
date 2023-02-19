import { Avatar } from '@mui/material'
import React from 'react'
import './Friend.css'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel } from '../../AppSlice/AppSlice';


function Friend({ nameOfFriend, lastMessage, avatarURL, uid }) {
  const currentChannel = useSelector((state) => state.app.currentChannel)
  const dispatch = useDispatch()
  const highlightChannel = () => {
    dispatch(selectChannel(uid))
  }
  return (
    <div>
      <div className={currentChannel !== uid ? ('Friend Friend-hover') : ('Friend Friend-highlighted')} onClick={highlightChannel}>
        {
          avatarURL ? (<Avatar className='profile-avatar'>{nameOfFriend[0]}</Avatar>) : (<img src={avatarURL} className='profile-picture' />)
        }
        <div className="message-info">
          <p>{nameOfFriend}</p>
          <p>{lastMessage}</p>
        </div>
      </div>
      {/* <hr className='Friend-hr'/> */}
    </div>
  )
}

export default Friend