import React from 'react';

export default function UploadFileButton() {
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
            <button onClick={handleClick}>
                Upload an image
            </button>
            <input 
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}} 
            />
        </>
    )
}