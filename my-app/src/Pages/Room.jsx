import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { RoomID } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const appID = 2141739553;
    const serverSecret = '06342c6ce91228e8ea8b648bcfcb3280';

    const userID = Date.now().toString();
    const userName = 'User_' + Math.floor(Math.random() * 10000);

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      RoomID,
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
            url: `${window.location.protocol}//${window.location.host}/room/${RoomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    }
  }, [RoomID]);

  return (
    <div>
      <div ref={meetingRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};

export default Room;
