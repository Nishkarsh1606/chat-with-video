import { VideoCallRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import LeftSideBar from './LeftSideBar'
import Message from './components/Message'
import './MainApp.css'

function Feed() {
  const [chatMessage, setChatMessage] = useState('')
  const handleChatMessage=(e)=>{
    e.preventDefault()
    setChatMessage('')
  }
  return (
    <div className='MainApp'>
      <LeftSideBar />
      <div className="Feed">
        <div className="feed-header">
          <p style={{ fontWeight: 'bold' }}>John</p>
          {/* create modal where the video call options pop up --> video call on new page */}
          <div style={{ cursor: 'pointer' }}>
            <VideoCallRounded />
          </div>
        </div>
        <hr style={{ height: '0.1px', borderWidth: '0.1px' }} />
        <div className="ChatSection">
          {/* Render individual chat components */}
          <Message author={'Nishkarsh'} authorID={'test'} messageBody={'Hello world'} currentUID={'test'} />
          <Message author={'Nishkarsh'} authorID={'test'} messageBody={'Hello world'} currentUID={'test2'} />
        </div>
        <div className="send-chat">
          <form onSubmit={handleChatMessage}>
            <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
            <button type='submit'><SendIcon/></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feed