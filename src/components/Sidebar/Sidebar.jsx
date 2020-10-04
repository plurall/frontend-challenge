import React from 'react';

function Sidebar({children}) {
    return (
        <>
        <div className="sidebar">
            {children}
        </div>
        </>
    );
}

export default Sidebar;
