import React from 'react';
import Button from '@mui/material/Button';

export default function UploadFileButton(props) {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    }
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    }

    return (
        <>
            <Button variant='outlined' onClick={handleClick}>
                {props.message}
            </Button>
            <input 
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}} 
            />
        </>
    )
}