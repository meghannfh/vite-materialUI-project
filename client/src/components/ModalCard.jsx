import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CardFullscreenFront from './CardFullscreenFront.jsx'
import CardFullscreenBack from './CardFullscreenBack.jsx'

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [enlarge, setEnlarge] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEnlarge = () => {
    setEnlarge(true);
  }
  const handleClickMinimize = () => {
    setEnlarge(false);
  }

  return (
    <div class='ModalCard'>
      <div variant="outlined" onClick={handleClickOpen}>
        <img src="assets/cardFrontEx.jpg" alt="" />
        img Front of Card
      </div>
      <Button>Card Name</Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Replace with Card's name"}
        </DialogTitle>
        <DialogContent>
          <CardFullscreenFront />
          <CardFullscreenBack />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}