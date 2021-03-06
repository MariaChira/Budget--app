import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Expenses from "./pages/expenses/expenses"
import Home from "./pages/home/home"
import Income from "./pages/income/income"
import Budget from "./pages/budget/budget"

function App() {
  const links = [
    {
      key: "1",
      path: "/",
      label: "Home",
      component: () => <Home />,
    },
    {
      key: "2",
      path: "/income",
      label: "Income",
      component: () => <Income />,
    },
    {
      key: "3",
      path: "/expenses",
      label: "Expenses",
      component: () => <Expenses />,
    },
    {
      key: "4",
      path: "/budget",
      label: "Budget",
      component: () => <Budget />,
    }
  ]
 
  return (
    <div>
      <Router>
        <Header links={links} />
        <Switch>
          {links.map((link) => (
            <Route key={link.label} exact path={link.path}>
              {link.component}
            </Route>
          ))}
          <Route>404 Page Not Found</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
