import React from "react";

import "./home.css";
import { Button, Jumbotron, Card, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron>
        <h5>"Never spend your money before you earned it"</h5>
        <p>
          <Button variant="dark">
            <a
              href="https://adrian.asoltanie.com/lista-cursuri/"
              className="learn-more"
              target="_blank"
              rel="noreferrer">
              Learn more
            </a>
          </Button>
        </p>
      </Jumbotron>

      <Container className="instructions">
        <Row>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  How many financial legs do you stand on? How many sources of
                  income do you have? For a family, 3 or more is recommended.
                </span>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  Do you only have active income? Then you are caught in the rat
                  race. Start building passive income.
                </span>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  How much money goes through your hands in 12 months? What do you spend them on and how much do you save?
                </span>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  {" "}
                  How much is a day's work worth? Can you do better?{" "}
                </span>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  {" "}
                  Your safety fund should be your total monthly expenses times 6 and
                  your emergency fund should be 1500-2000 RON or 600-700 EUR/USD{" "}
                </span>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="card-instruction">
              <Card.Text>
                <span>
                  {" "}
                  Separate your money into categories / accounts / envelopes to track expenses more easily.
                </span>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
