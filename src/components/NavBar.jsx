import { Link } from "react-router";

const NavBar = () => {
    return (
        <nav className='fixed top-0 left-0 z-999 md:p-9 p-3'>
            <Link to="/">
                <img src='public/images/nav-logo.svg' alt='nav logo' className='md:w-24 w-20'></img>
            </Link>
        </nav>
    )
}

export default NavBar