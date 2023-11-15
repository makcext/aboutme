import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CameraComponent = () => {
  const screenVideoRef = useRef<HTMLVideoElement>(null);
  const cameraVideoRef = useRef<HTMLVideoElement>(null);

  const [screenLabel, setScreenLabel] = useState<string | null>(null);
  const [cameraLabel, setCameraLabel] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);

  const [isScreenRunning, setIsScreenRunning] = useState<boolean>(false);
  const [isCameraRunning, setIsCameraRunning] = useState<boolean>(false);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
  }, []);

  const handleCaptureScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      if (stream) {
        const track = stream.getVideoTracks()[0];
        const label = track.label;
        console.log('screenStream: ', label);
        setScreenLabel(label);
        setScreenStream(stream);
        setIsScreenRunning(true); // set isScreenRunning to true
        setShowAlert(true);
        if (screenVideoRef.current) {
          screenVideoRef.current.srcObject = stream;
        }
      }
    } catch (error) {
      console.error('Error accessing screen capture', error);
    }
  };

  const handleStopCaptureScreen = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
      setScreenLabel(null);
      setIsScreenRunning(false); // set isScreenRunning to false
      setShowAlert(false);
      if (screenVideoRef.current) {
        screenVideoRef.current.srcObject = null;
      }
    }
  };

  const handleCaptureCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (stream) {
        const label = stream.getVideoTracks()[0].label;
        console.log('cameraStream: ', label);
        setCameraLabel(label);
        setCameraStream(stream);
        setIsCameraRunning(true); // set isCameraRunning to true
        if (cameraVideoRef.current) {
          cameraVideoRef.current.srcObject = stream;
        }
      }
    } catch (error) {
      console.error('Error accessing camera', error);
    }
  };

  const handleStopCaptureCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
      setCameraLabel(null);
      setIsCameraRunning(false); // set isCameraRunning to false
      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = null;
      }
    }
  };

  return (
    <Box paddingBottom={1}>
      <Paper variant="outlined" sx={{ borderColor: 'gray', padding: 1 }}>
        {/* <Typography variant="h4">Stream Indetificator</Typography> */}
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Stream Indetificator</Typography>
          <InfoOutlinedIcon color="success" />
        </Grid>
        <Box padding={1}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={6} justifyContent={'center'} justifyItems={'center'}>
              {isScreenRunning ? (
                <Item>
                  <Button variant='outlined' color='error' onClick={handleStopCaptureScreen} disabled={isMobile}>
                    Stop
                  </Button>
                </Item>
              ) : (
                <Item>
                  <Button variant='outlined' color='success' onClick={handleCaptureScreen} disabled={isMobile}>
                    Screen
                  </Button>
                </Item>
              )}
            </Grid>
            <Grid item xs={6}>
              <Item>
                {isCameraRunning ? (
                  <Button variant='outlined' color='error' onClick={handleStopCaptureCamera}>
                    Stop
                  </Button>
                ) : (
                  <Button variant='outlined' color='success' onClick={handleCaptureCamera}>
                    Camera
                  </Button>
                )}
              </Item>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" alignItems="center">
            <Grid item xs={6}>
              {cameraLabel && <Typography variant="caption">{cameraLabel}</Typography>}
            </Grid>
            <Grid item xs={6}>
              {screenLabel && <Typography variant="caption">{screenLabel}</Typography>}
            </Grid>
          </Grid>
          <Grid container spacing={0} justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              {cameraVideoRef.current?.srcObject ? (
                <video ref={cameraVideoRef} autoPlay style={{ width: '150px' }} />
              ) : (
                <video ref={cameraVideoRef} autoPlay style={{ width: '0px' }} />
              )}
            </Grid>
            <Grid item xs={6}>
              {!isMobile && (
                <>
                  {screenVideoRef.current?.srcObject ? (
                    <video ref={screenVideoRef} autoPlay style={{ width: '150px' }} />
                  ) : (
                    <video ref={screenVideoRef} autoPlay style={{ width: '0px' }} />
                  )}
                </>
              )}
            </Grid>
            {isMobile && (
              <Alert severity="warning">screen sharing is not available on mobile</Alert>
            )}
          </Grid>
        </Box>
        {showAlert && <Alert severity="info">Screen capture started</Alert>}

      </Paper>
    </Box>
  );
};

export default CameraComponent;