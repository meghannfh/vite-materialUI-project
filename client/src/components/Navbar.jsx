import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar(auth=false) {
    return(
    <header class='navbar'>
        <article>
            <Link to='/'><img src="\assets\noun-healthcare-199761.svg" alt="" /></Link>
        </article>
        <article></article>
        <article>
            <ul>
                <Link to='/login'>
                    <Button text='Login' ></Button>
                </Link>
            </ul>
        </article>
    </header>
    )
}