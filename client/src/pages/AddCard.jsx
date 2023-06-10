import React from 'react';
import UploadFileButton from '../components/UploadFileButton';
import UploadAndDisplayImage from '../components/UploadAndDisplayImage';

export default function AddCard() {
    return <>
        <section class='box'>
            <h1>Add a Card</h1>
            <article>
                <UploadFileButton />
                <UploadAndDisplayImage />
            </article>
        </section>
    </>
}