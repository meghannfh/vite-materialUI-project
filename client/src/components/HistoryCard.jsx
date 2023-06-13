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
    <div className='card historyCard'>
      <div variant='outlined' onClick={handleClickOpen}>
        <h3>Date</h3>
        <h4>Location</h4>
        <h5>Provider</h5>
        <p>Preview Text.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptas modi cumque hic, officiis eos aliquam voluptatum libero voluptates ipsa eaque magnam quibusdam nihil doloremque quisquam aut reprehenderit amet vitae cum nemo? Perspiciatis repellat, labore obcaecati non aperiam amet optio suscipit fuga vel nam, voluptatum, fugiat dignissimos quibusdam ullam voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ad culpa cupiditate dolorem ab temporibus placeat, impedit non nesciunt consequatur!
        </p>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <article>
              <h3>Date</h3>
              <p>
                June 12, 2023
              </p>
            </article>
            <article>
              <h3>Location</h3>
              <p>
                Corner Clinic
              </p>
            </article>
            <article>
              <h3>Provider</h3>
              <p>
                Dr. Elbow-Surgeon
              </p>
            </article>
            <article>
              <h3>Summary</h3>
              <p>
                Replace with history content (if there are images then display them at the bottom)
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi deleniti veniam dicta commodi laudantium veritatis explicabo neque necessitatibus facere fugiat eveniet corporis saepe eos nemo, facilis sapiente et, pariatur possimus animi aspernatur odit. Inventore soluta vel ad? Mollitia, minima perferendis! Sequi cumque porro, expedita autem sapiente excepturi ducimus possimus ex iure enim provident, iste explicabo ad deleniti temporibus neque modi ipsum. Dolores quae sunt quos veritatis. Earum unde incidunt et soluta veritatis illum laborum alias, doloremque numquam voluptas, consequatur tenetur ducimus, cumque temporibus ratione repudiandae ex animi voluptates facere nisi necessitatibus esse ipsa harum? Labore, placeat. Quod, ut quas?
              </p>
            </article>
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