import React from 'react';
import { useNavigate } from "react-router-dom";
import ModalCard from '../components/ModalCard';
import UploadCard from'../components/UploadCard';

export default function Profile() {
    let navigate = useNavigate(); 
    const routeAddCard = () =>{ 
        let path = `/addCard`; 
        navigate(path);
    }
    return <>
        <section class='box'>
            <section>
                <UploadCard />
            </section>
            <section>
                <h1>My Cards</h1>
            </section>
            <section>
                <article class='card'>
                    <ModalCard />
                </article>
                <article class='card'>
                    <span>put img here (when clicked on it will enlarge modal && when clicked on while enlarge it will flip to the back side to abel to view both sides)</span>
                    <h2>example card</h2>
                </article>
                <article class='card'>
                    <span>put img here (when clicked on it will enlarge modal && when clicked on while enlarge it will flip to the back side to abel to view both sides)</span>
                    <h2>example card</h2>
                </article>
            </section>
        </section>
    </>
}