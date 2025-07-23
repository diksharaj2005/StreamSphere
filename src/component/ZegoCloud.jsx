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
        url:`https://localhost:5173/room/${id}`
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
        // width: "100%",
        // maxWidth: "900px",  
        // minWidth: "300px",
        // overflow: "hidden",
        // borderRadius: "12px",
        // boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        // backgroundColor: "white"
      }}
    ></div>
  </div>
  )
}

export default ZegoCloud