import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const ZegoCloud = () => {
  const {id}=useParams();

  const meeting = (element)=>{
 const appID = 264685267;
  const serverSecret = "3ff228a2fe9b72f254e048bcd55abed3";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Math.random().toString()," ");

    const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          
        },
        sharedLinks:[{name:'meeting link',
        url:`https://streamspherelive.netlify.app/room/${id}`
        }]
      });
  
  }
  return (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100vw", 
    height: "100vh", 
    overflowX: "hidden", 
    padding: "1rem", 
    boxSizing: "border-box" 
  }}>
    <div
       ref={meeting}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        zIndex: 1000,
      }}
    ></div>
  </div>
  )
}

export default ZegoCloud
