import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <ul>
                <Link to='/profile'>Profile</Link>
                <Link to='/about'>About</Link>
                <Link to='/addCard'>Add a card</Link>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </ul>
        </>
    )
}