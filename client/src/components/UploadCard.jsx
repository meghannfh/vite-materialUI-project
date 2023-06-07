import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Camera from './Camera';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
            <Button variant="outlined" htmlFor="file-upload">
                Upload Card Front
                <input id="file-upload" type="file" />
            </Button>
            <Button variant="outlined" htmlFor="file-upload">
                Upload Card Back
                <input id="file-upload" type="file" />
            </Button> 
          </DialogContentText>
          <DialogContentText>OR</DialogContentText>
          <DialogContentText>
            <Button variant="outlined" onClick={Camera.startCameraa}>Take a photo</Button>
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