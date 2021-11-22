import React from "react"

import Accordion from "react-bootstrap/Accordion"
import AccordionCard from "../accordionCard/accordionCard"
import CardIncome from "../cardIncome/cardIncome"
import DescriptionCard from "../descriptionCard/descriptionCard"

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
          <CardIncome  handleOnChange={contentChange} id="active"  />
          <DescriptionCard text="ex:salaries, bonuses, commissions"></DescriptionCard>
        </AccordionCard>
        <AccordionCard cardTitle="Pasive Income" eventKeyNo="2">
          <CardIncome handleOnChange={contentChange} id="pasive" />
          <DescriptionCard text="ex:dividendes, rents, interest, copyright. (you should put the net income, after taxes) "></DescriptionCard>
        </AccordionCard>
      </Accordion>

      {/* 
      Values: 
      Total: month: ACTIVE  total month income + PASIVE total month income
           : year: ACTIVE   total year income + PASIVE total year income
           : day : ACTIVE   total day income + PASIVE total day income
       */}
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
