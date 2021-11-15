import React from "react"

import "./home.css"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
// import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h2>Budget App</h2>
        <h6>"Never spend your money before you earned it"</h6>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>

      {/* <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2020/07/15/08/40/deer-5406930_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/09/28/05/05/bird-6663217_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}

export default Home
