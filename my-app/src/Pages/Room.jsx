import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  // Changed from RoomID to roomId to match the route parameter
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    // Add error handling for missing roomId
    if (!roomId) {
      console.error('Room ID is missing');
      return;
    }

    const appID = 2141739553;
    const serverSecret = '06342c6ce91228e8ea8b648bcfcb3280';

    const userID = Date.now().toString();
    const userName = 'User_' + Math.floor(Math.random() * 10000);

    try {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId, // Using roomId instead of RoomID
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      if (meetingRef.current) {
        zp.joinRoom({
          container: meetingRef.current,
          sharedLinks: [
            {
              name: 'Copy Link',
              url: `${window.location.protocol}//${window.location.host}/room/${roomId}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
        });
      }
    } catch (error) {
      console.error('Error joining room:', error);
    }
  }, [roomId]); // Changed dependency from RoomID to roomId

  // Add loading state
  if (!roomId) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px' 
      }}>
        Loading room...
      </div>
    );
  }

  return (
    <div>
      <div ref={meetingRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};

export default Room;