import React from 'react';

const NavList = ({children}) => {
    return (
        <ul className="nav-list">
            {children}
        </ul>
    );
}

export default NavList;
