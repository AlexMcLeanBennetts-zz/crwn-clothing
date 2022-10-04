import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <CrwnLogo />
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/login'>
                        Login
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;