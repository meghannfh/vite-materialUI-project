import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/history'>History</Link>
                <Link to='/about'>About/Todo List</Link>
            </ul>
        </>
    )
}