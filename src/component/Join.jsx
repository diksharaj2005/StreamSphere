import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logoImg.png'


const Join = () => {
    const [value, setValue] = useState()
    const navigate=useNavigate();

    const joinMeet= () =>{
        navigate(`/room/${value}`)
    }
  return (
    <>
    <div className="header">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>StreamSphere</span>
      </div>
    </div>
    <div className='main_content'>
     <h1> Go Live with StreamSphere</h1>
        <p>
          Welcome to <strong>StreamSphere</strong> — your gateway to seamless, real-time livestreaming.<br></br>
          Whether you're hosting an event, running a class, or just going live with friends,
          StreamSphere connects you instantly.
        </p>
        <p>
          Simply enter your unique room ID below and join the action. No hassle, no complex setup — just pure streaming.
        </p>
        <p>
          Your livestream, your rules. Let's make it happen. 🚀
        </p>
        <input type="text" placeholder="Enter Room ID"onChange={(e)=>setValue(e.target.value)} value={value} />
        <button onClick={joinMeet}>Start Streaming</button>
    </div>
    </>
  )
}

export default Join