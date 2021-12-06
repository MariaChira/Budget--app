import "./header.css"
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {
  
  return (
    <div className="header-container">
      <div className="contact-icons"> 
        <a href="https://github.com/MariaChira" target="_blank"><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></a>
        <a href="https://www.linkedin.com/in/maria-chira-1a62a0172/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href="https://www.instagram.com/mariageagulea/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>  
    </div>
   
      <div className="wrapper">
        <nav className="navbar">
          {props.links.map((links) =>
              <NavLink exact to={links.path} name={links.label} key={links.key}>
                {links.label}
              </NavLink>
            )
          }
        </nav>
      </div>
    </div>
  )
}

export default Header
