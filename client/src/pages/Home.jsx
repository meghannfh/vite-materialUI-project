import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
  
    let navigate = useNavigate(); 
    const routeLogin = () =>{ 
        let path = `/login`; 
        navigate(path);
    }
    return (
        <>
            <section class="Home box">
                <main>
                    <figure>
                        <img src="assets/pexels-andrea-piacquadio-3768131.jpg" alt="" />
                    </figure>
                </main>
                <article>
                    <h1>Your medical history in your hands.</h1>
                    <div onClick={routeLogin}>
                        <Button bgColor='steelblue' text='Get Started'></Button>
                    </div>
                </article>
            </section>
            <Footer />
        </>
    )
}