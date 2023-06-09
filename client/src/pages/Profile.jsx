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
        <section class='box profile'>
            <section>
                <UploadCard />
            </section>
            <section>
                <h1>My Cards</h1>
            </section>
            <section class='cardBoard'>
                <article class='card'>
                    <ModalCard />
                </article>
                <article class='card'>
                    <ModalCard />
                </article>
                <article class='card'>
                    <ModalCard />
                </article>
                <article class='card'>
                    <ModalCard />
                </article>
            </section>
        </section>
    </>
}