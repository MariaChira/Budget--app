import React from "react"

import Accordion from "react-bootstrap/Accordion"
import AccordionCard from "../accordionCard/accordionCard"
import CardIncome from "../cardIncome/cardIncome"

import { InputGroup, FormControl } from "react-bootstrap"

let obj = {}

const AccordionIncome = () => {
  function contentChange(e) {
    obj = { ...obj, ...e }
    console.log(obj)
    sessionStorage.setItem("totalIncome", JSON.stringify(obj))

    const sessionObj = sessionStorage.getItem("totalIncome")
    console.log(JSON.parse(sessionObj))
  
  }
  return (
    <div>
      <Accordion>
        <AccordionCard cardTitle="Active Income" eventKeyNo="1">
          <CardIncome  handleOnChange={contentChange} id="active" />
        </AccordionCard>
        <AccordionCard cardTitle="Pasive Income" eventKeyNo="2">
          <CardIncome  handleOnChange={contentChange} id="pasive" />
        </AccordionCard>
      </Accordion>
      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total Income" disabled />
        <FormControl
          aria-label="total-month"
          placeholder= "month"
          readOnly
          value=""
        />
        <FormControl
          aria-label="total-year"
          placeholder= "year"
          readOnly
          value=""
        />
        <FormControl
          aria-label="total-day"
          placeholder= "day"
          readOnly
          value=""
        />
      </InputGroup>
    </div>
  )
}

export default AccordionIncome
