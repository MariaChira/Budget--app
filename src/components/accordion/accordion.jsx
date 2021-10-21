import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { InputGroup, FormControl } from "react-bootstrap"

const AccordionComponent = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Active Income
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text> Salary 1</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text> Salary 2</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text> Other</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Pasive Income
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text> Rents</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text> Dividendes</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text> Shares</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text> Crypto</InputGroup.Text>
                <FormControl aria-label="Monthly" />
                <FormControl aria-label="Yearly" />
                <FormControl aria-label="Daily" />
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default AccordionComponent
