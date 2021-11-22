import React from "react"

import "./home.css"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"


const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron>
        {/* <h2>Budget App</h2> */}
        <h6>"Never spend your money before you earned it"</h6>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
    <div className="instruction-container">
      <h6>TO REMEMBER!</h6>
      <h6> 1. How many financial legs do you stand on? How many sources of income do you have? It is recommended at least 3 for a family. </h6>
      <h6> 2. Do you only have active income? Then you are caught in the rat race. Build passive income in time.</h6>
      <h6> 3. How much money goes through your hands in 12 months? On what do they go to and how many stop at you?</h6>
      <h6> 4. How much is 1 day's work worth? Is it enough or can you do something for the better?</h6>
      <h6> 5. Divide the money into categories / accounts / envelopes to separate and track expenses more easily.</h6>
    </div>
    
    </div>
  )
}

export default Home
