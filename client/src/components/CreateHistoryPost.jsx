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
      <Button variant='outlined' onClick={handleClickOpen}>
        Add New Event
      </Button>
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Create New Event"}
        </DialogTitle>
        <DialogContent>
            <form className='infoForm' action="">
                <article className='infoInput'>
                    <label htmlFor="eventDate">WHEN</label>
                    <input id='eventDate' type="date" />
                </article>
                <br />
                <article className='infoInput where'>
                    <label htmlFor="eventWhere">WHERE</label>
                    <input id='eventWhere' type="text" placeholder='Where did the procedure take place? The facility that the procedure took place. Maybe add an address picker.' />
                </article>
                <br />
                <article className='infoInput'>
                    <label htmlFor="eventWho">WHO</label>
                    <input id='eventWho' type="text"  placeholder='Who did the procedure? Enter the care provider name if applicable.' />
                </article>
                <br />
                <article className='infoInput what'>
                    <label htmlFor="eventWhat">WHAT</label>
                    <input id='eventWhat' type="text" placeholder='What procedure was done? Supply a brief summary of what was done.' />
                </article>
            </form>
          <br />
          <label htmlFor="">ATTACH RELEVANT DOCUMENTS HERE. YOU CAN TAKE A PICTURE OF THE VISIT SUMMARY GIVEN HERE.</label>
          <DialogContentText>
            <br />
            <UploadFileButton message='Upload Image' />
            <span style={{margin: '0 2rem'}}>OR</span> 
            <Button variant="outlined" onClick={Camera.startCamera}>Take a photo</Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>
            Submit
          </Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}