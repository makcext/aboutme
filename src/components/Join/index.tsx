import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Divider, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  //TO-DO: make this global for every component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const buttonSize = isMobile ? 'small' : 'medium';



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" color="success" onClick={handleClickOpen} style={{ cursor: "pointer" }}>
        - Join -
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
      >
        <DialogTitle
        >{"Join"}</DialogTitle>
        <DialogContent 
        >
          <Typography>login </Typography>
          <Typography paddingBottom={1}>pass </Typography>
          <Divider />
          <Typography variant="subtitle2" padding={1}>USE [admin : admin] OR [demo : demo] </Typography>
        </DialogContent>
        <DialogActions 
        >
          <Button size={buttonSize} color="success" variant='outlined' onClick={handleClose}>Register</Button>
          <Button size={buttonSize} variant='outlined' onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}