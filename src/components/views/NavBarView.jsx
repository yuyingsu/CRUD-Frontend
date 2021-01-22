import React from 'react';
import {Link} from 'react-router-dom';

const NavBarView = (props) => {
    return(
        <nav>
            <form>
                <Link to = "/" >Home</Link>
                <Link to = "/campuses">Campuses</Link>
                <Link to = "/students">Students</Link>
            </form>
        </nav>
    )
}

export default NavBarView;