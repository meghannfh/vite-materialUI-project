import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <ul>
                <Link to='/profile'>Profile</Link>
                <Link to='/about'>About</Link>
                <Link to='/addCard'>Add a card</Link>
                <Link to='/'>home</Link>
                <Link to='/login'>login</Link>
                <Link to='/signup'>signup</Link>
            </ul>
        </>
    )
}