import React from 'react';
import { useNavigate } from "react-router-dom";
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
                    <button onClick={routeLogin}>Get Started</button>
                </article>
            </section>
            <Footer />
        </>
    )
}