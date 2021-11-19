import React from "react"
import { Card, Accordion } from "react-bootstrap"

const AccordionCard = (props) => {
 
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={props.eventKeyNo}>
        {props.cardTitle}
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={props.eventKeyNo}>
        <Card.Body>{props.children}</Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default AccordionCard
