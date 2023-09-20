import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const CameraComponent = () => {
  const screenVideoRef = useRef<HTMLVideoElement>(null);
  const cameraVideoRef = useRef<HTMLVideoElement>(null);
  const [screenLabel, setScreenLabel] = useState<string | null>(null);
  const [cameraLabel, setCameraLabel] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
  }, []);

  const handleCaptureScreen = async () => {
    if (isMobile) {
      alert('Screen capture is not supported on mobile devices.');
      return;
    }
    const screenStream: MediaStream | null = await getStream('getDisplayMedia', { video: true });
    if (screenStream) {
      const label = screenStream.getVideoTracks()[0].label;
      console.log('screenStream: ', label);
      setScreenLabel(label);
      if (screenVideoRef.current) {
        screenVideoRef.current.srcObject = screenStream;
        // screenVideoRef.current.style.border = 'solid green 5px';
      }
    }
  };

  const handleCaptureCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (cameraStream) {
        const label = cameraStream.getVideoTracks()[0].label;
        console.log('cameraStream: ', label);
        setCameraLabel(label);
        if (cameraVideoRef.current) {
          cameraVideoRef.current.srcObject = cameraStream;
        }
      }
    } catch (error) {
      console.error('Error accessing camera', error);
    }
  };

  const getStream = async (method: 'getDisplayMedia' | 'getUserMedia', options?: MediaStreamConstraints) => {
    if (!navigator.mediaDevices || !navigator.mediaDevices[method]) {
      console.error(`${method} is not supported`);
      return null;
    }
    try {
      const stream = await navigator.mediaDevices[method]({
        video: true,
        audio: false,
        ...options,
      });
      return stream;
    } catch (error) {
      console.error(`Error accessing ${method === 'getDisplayMedia' ? 'display' : 'user'} media`, error);
      return null;
    }
  };

  return (
    <Box paddingBottom={0} justifyContent="space-around" >
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        <Typography variant="h3" >stream indetificator</Typography>

        <Box padding={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {!isMobile && <video ref={screenVideoRef} autoPlay style={{ width: '150px' }}/>}
            </Grid>
            <Grid item xs={6}>
              <video ref={cameraVideoRef} autoPlay style={{ width: '150px' }}/>
            </Grid>
          </Grid>

          <Box>
            {screenLabel && <Typography variant="caption" >{screenLabel}</Typography>}
            {cameraLabel && <Typography variant="caption" >{cameraLabel}</Typography>}
          </Box>

          {!isMobile && (
            <Button onClick={handleCaptureScreen}>
              Capture Screen
            </Button>
          )}
          {isMobile && (
            <Typography variant="caption" >
              Screen capture is not supported on mobile devices.
            </Typography>
          )}
          <Button onClick={handleCaptureCamera}>
            Capture Camera
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CameraComponent;