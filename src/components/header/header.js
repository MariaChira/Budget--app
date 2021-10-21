
 import { useState } from 'react';

import "./header.css"
 import { Link } from "react-router-dom";


function Header() {

    const [isActive, setIsActive] = useState(true);

    function addActiveClass () {
        setIsActive(!isActive);
        
    }
    console.log(isActive);
    
        
        
    

    return (
        <div className="header-container">
            <div className="wrapper">
                <nav className="navbar">
                    <Link onClick={addActiveClass} to="/" className={isActive ? "active" : "" }>Home</Link>
                    <Link onClick={addActiveClass} to="/income" className={isActive ? "active" : "" }>Income</Link>
                    <Link onClick={addActiveClass} to="/expenses" className={isActive ? "active" : "" }>Expenses</Link>
                    <Link onClick={addActiveClass} to="/budget" className={isActive ? "active" : "" }>Budget</Link>
                </nav>
               
            </div>

            
</div>
    )
}

export default Header;