import React from 'react';
import Button from '../components/Button';

export default function Login() {
    const [sign, setSign] = React.useState(false);
    const handleClick = _ => {
        event.preventDefault();
        setSign(!sign);
    }
    if (sign) {
        return(
            <>
                <section class='SignUp box'>
                    <section>
                        <h1>Create An Account</h1>
                    </section>
                    <form action="">
                        <article>
                            <h3>Email</h3>
                            <input type="text" />
                        </article>
                        <article>
                            <h3>Retype Email</h3>
                            <input type="text" />
                        </article>
                        <article>
                            <h3>Password</h3>
                            <input type="password" />
                        </article>
                        <article>
                            <h3>Retype Password</h3>
                            <input type="password" />
                        </article>
                        <br />
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button bgColor='steelblue' text='Sign Up'/>
                            <div onClick={handleClick}>
                                <Button bgColor='green' text='Sign In' />
                            </div>
                        </div>
                    </form>
                </section>
            </>
        ) 
    }
        return(
            <>
                <section class='SignUp box'>
                    <section>
                        <h1>Sign In</h1>
                    </section>
                    <form action="">
                        <article>
                            <h3>Email</h3>
                            <input type="text" />
                        </article>
                        <article>
                            <h3>Password</h3>
                            <input type="password" />
                        </article>
                        <br />
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button bgColor='steelblue' text='Sign In'></Button>
                            <br />
                            <br />
                            <div onClick={handleClick}>
                                <Button bgColor='green' text='Sign Up' />
                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
}