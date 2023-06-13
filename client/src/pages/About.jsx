import React from 'react';

export default function About() {
    return (
        <>
            <section class='box'>
                <article>
                    <ul><h1>To Do List</h1>
                        <li>
                            <p>Let's add reminders in the future. Reminders for appointments. After the appointment if the user opens the app, ask if they attended; if yes then auto open create an event form and have them fill it out, if no ask if it got rescheduled | yes then create a new reminder no go to home.</p>
                        </li>
                    </ul>
                    <h1>About appName (this information should be presented in a panel/cards for better readability) </h1>
                    <p>This application serves as a pocket medical database for you and all your medical-related information. You can store insurance cards and access them anytime in one application instead of having to carry them around in your wallet. Document medical visits to have a comprehensive medical history and view them within a timeline or search for specific things with keywords.</p>
                </article>
                <article className='cardBoard'>
                    <article className='card'>
                        <h4>Insurance Cards</h4>
                        <img style={{objectFit: 'contain',  width: '100%'}} src="assets\pexels-nikolay-ivanov-547593.jpg" alt="" />
                        <p>Store and access all of your insurance/Medicare/Medicaid cards in one application! Then view all of them!</p>
                    </article>
                    <article className='card'>
                        <h4>Document Medical Events</h4>
                        <img style={{objectFit: 'contain',  width: '100%'}} src="assets\pexels-anete-lusina-4792285.jpg" alt="" />
                        <p>Add events to create a comprehensive medical record. Documenting events will help your healthcare provider and also yourself from preventing redundant exams and procedures.</p>
                    </article>
                    <article className='card'>
                        <h4>Document Storage</h4>
                        <img style={{objectFit: 'contain',  width: '100%'}} src="assets\pexels-cottonbro-studio-7319068.jpg" alt="" />
                        <p>No more digging through piles of paper. Add documents by simply taking a picture with your smartphone! Then search for a certain event with keywords.</p>
                    </article>
                    <article className='card'>
                        <h4>Reminders</h4>
                        <img style={{objectFit: 'contain',  width: '100%'}} src="assets\pexels-vlada-karpovich-5790823.jpg" alt="" />
                        <p>Have an appointment coming up? We'll remind you! Easily create reminders to stay on top of your health care visits.</p>
                    </article>
                </article>
            </section>
        </>
    )
}