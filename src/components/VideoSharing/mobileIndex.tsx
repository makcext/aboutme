import React, { useState, useRef } from 'react';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const CameraComponent = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartStream = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: "environment" } // use the back camera
        }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStopStream = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  return (
    <>
      <Button onClick={handleStartStream}>Start Camera</Button>
      <Button onClick={handleStopStream}>Stop Camera</Button>
      <br />
			<Box sx={{ width: '100%', height: '100%' }}>
      {stream && <video ref={videoRef} autoPlay />}
			</Box>
    </>
  );
};

export default CameraComponent;