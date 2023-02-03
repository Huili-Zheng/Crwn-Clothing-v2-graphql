import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>Logo</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                </div>
                <h1>I am the navigation bar.</h1>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;