import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Camera from './Camera';
import UploadFileButton from './UploadFileButton';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Card
      </Button>
      <Dialog
        fullScreen={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add Card"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <UploadFileButton message='Upload Card Front' />
            <UploadFileButton message='Upload Card Back' />
          </DialogContentText>
          <DialogContentText>OR</DialogContentText>
          <DialogContentText>
            <Button variant="outlined" onClick={Camera.startCameraa}>Take photo of front of card</Button>
            <Button variant="outlined" onClick={Camera.startCameraa}>Take photo of back of card</Button>
          </DialogContentText>
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