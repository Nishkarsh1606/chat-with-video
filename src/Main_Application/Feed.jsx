import { VideoCallRounded } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import LeftSideBar from './LeftSideBar'
import Message from './components/Message'
import './MainApp.css'
import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, messagesRef, messagesRefDesc } from '../../firebase';

function Feed() {
  const user = auth.currentUser
  const [chatMessage, setChatMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [docTitle,setDocTitle]=useState(document.title)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    onSnapshot(messagesRefDesc, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => (
        {
          data: doc.data(),
          id: doc.id
        }
      )))
    })
  }, [])

  useEffect(()=>{
    document.title='Hola!'
    const timeOutID=setTimeout(()=>{
      document.title=docTitle
    },500) 
    return ()=>{
      clearTimeout(timeOutID)
      document.title=docTitle
    }
  },[])

  const handleChatMessage = (e) => {
    e.preventDefault()
    if (chatMessage.length > 0) {
      setChatMessage('')
      addDoc(collection(db, 'users'), {
        authorName: user.displayName,
        authoruid: user.uid,
        message: chatMessage,
        avatar: '' || user.photoURL,
        serverTime: serverTimestamp()
      })
    }
  }

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className='MainApp'>
      <LeftSideBar />
      <div className="Feed">
        <div className="feed-header">
          <p style={{ fontWeight: 'bold' }}> {'Test-env'} </p>
          {/* create modal where the video call options pop up --> video call on new page */}
          <div style={{ cursor: 'pointer' }} onClick={() => alert('Video calls coming soon ✨')}>
            <VideoCallRounded />
          </div>
        </div>
        <hr style={{ height: '0.1px', borderWidth: '0.1px' }} />
        <div className="ChatSection">
          {
            messages.map(({ id, data: { authorName, authoruid, message, avatar } }) => (
              <Message key={id} authorName={authorName} authorID={authoruid} messageBody={message} currentUID={user.uid} profileURL={avatar} />
            ))
          }
          <div ref={messagesEndRef} />
        </div>
        <div className="send-chat">
          <form onSubmit={handleChatMessage}>
            <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
            <button type='submit'><SendIcon /></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feed