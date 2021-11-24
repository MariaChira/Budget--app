import React from "react"

import "./home.css"
import { Button, Jumbotron, Card, Container, Row, Col } from "react-bootstrap"

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron>
        <h6>"Never spend your money before you earned it"</h6>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
  
        <Container className="instructions">
          <Row>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6>1. How many financial legs do you stand on? How many source of income do you have? It is recommended at least 3 for a family.</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col >
              <Card className="card-instruction">
                <Card.Text>
                  <h6> 2. Do you only have active income? Then you are caught in the rat race. Build passive income in time.</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6> 3. How much money goes through your hands in 12 months? On what do they go to and how many stop at you?</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6> 3. How much money goes through your hands in 12 months? On what do they go to and how many stop at you?</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6> 4. How much is 1 day's work worth? Is it enough or can you do something for the better? </h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction" >
                <Card.Text>
                  <h6> 5. Divide the money into categories / accounts / envelopes to separate and track expenses more easily.</h6>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home
