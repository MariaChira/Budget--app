import "./header.css"
import { NavLink } from "react-router-dom"

function Header(props) {
  const incomeTotal = JSON.parse(sessionStorage.getItem("incomeTotal"))
  console.log(incomeTotal)

  return (
    <div className="header-container">
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
