import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
        <figure onClick={handleClickOpen} style={{cursor: 'pointer'}}>
            <img src="assets/cardBackEx.jpg" alt="" />
        </figure>
        <Dialog fullScreen={fullScreen} open={open}    onClose={handleClose} aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Back"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <img src="assets/cardBackEx.jpg" alt="" />
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