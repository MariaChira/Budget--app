
 import { useState } from 'react';

import "./header.css"
 import { Link } from "react-router-dom";


function Header() {

    const [isActive, setIsActive] = useState(true);

    function addActiveClass () {
        setIsActive(!isActive);
        if (isActive === true){
            
        }
        console.log(isActive);
    }

    
        
        
    

    return (
        <div className="header-container">
            <div className="wrapper">
                <nav className="navbar">
                    <Link onClick={addActiveClass} to="/" className="active">Home</Link>
                    <Link to="/income" className="">Income</Link>
                    <Link to="/expenses" className="">Expenses</Link>
                    <Link to="/budget" className="">Budget</Link>
                </nav>
                <h2>Budget App</h2>
                <h6>"Never spend your money before you earned it"</h6>
            </div>

            
</div>
    )
}

export default Header;