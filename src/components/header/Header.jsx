import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = ({ titulo, logo }) => {
    return (
        <>
            <div className="header">
                <h1>{titulo}</h1>
                <Link to ="/">{logo}</Link>
            </div>
        </>
    )

}

export default Header;