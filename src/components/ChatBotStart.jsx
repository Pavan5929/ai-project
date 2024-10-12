import React from 'react'
import './ChatBotStart.css'
const ChatBotStart = ({onStartChat}) => {
  return (
   <div className='start-page'>
    <button className='start-page-btn' onClick={onStartChat}>Luna</button>
   </div>
  )
}

export default ChatBotStart
