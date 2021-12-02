import React from "react"

import "./home.css"
import { Button, Jumbotron, Card, Container, Row, Col } from "react-bootstrap"

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron>
        <h5>"Never spend your money before you earned it"</h5>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
  
        <Container className="instructions">
          <Row>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6>How many financial legs do you stand on? How many source of income do you have? It is recommended at least 3 for a family.</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col >
              <Card className="card-instruction">
                <Card.Text>
                  <h6>Do you only have active income? Then you are caught in the rat race. Build passive income in time.</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6>How much money goes through your hands in 12 months? On what do they go to and how many stop at you?</h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6> How much is a day's work worth? Can you do better? </h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction">
                <Card.Text>
                  <h6> Your safety fund should be your total month expenses * 6. Your emergency fund should be 1500-2000 RON </h6>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card className="card-instruction" >
                <Card.Text>
                  <h6> Divide the money into categories / accounts / envelopes to separate and track expenses more easily.</h6>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home
