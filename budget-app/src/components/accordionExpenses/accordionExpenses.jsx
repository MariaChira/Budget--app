import React from "react"

import { Accordion } from "react-bootstrap"
import AccordionCard from "../accordionCard/accordionCard"
import CardExpenses from "../cardExpenses/cardExpenses"
import { InputGroup, FormControl } from "react-bootstrap"

let obj = {}

const AccordionExpenses = () => {
  function contentChange(e) {
    obj = { ...obj, ...e }
    console.log(obj)
    sessionStorage.setItem("totalExpenses", JSON.stringify(obj))

    const sessionObj = sessionStorage.getItem("totalExpenses")
    console.log(JSON.parse(sessionObj))
  }
  return (
    <div>
      <Accordion>
        <AccordionCard cardTitle="Vital expenses (20-25%)" eventKeyNo="1">
          <CardExpenses handleOnChange={contentChange} id="vital" />
        </AccordionCard>

        <AccordionCard cardTitle="House expenses (20-25%)" eventKeyNo="2">
          <CardExpenses handleOnChange={contentChange} id="house" />
        </AccordionCard>

        <AccordionCard cardTitle="Trasport expenses (3-5%)" eventKeyNo="3">
          <CardExpenses handleOnChange={contentChange} id="transport" />
        </AccordionCard>

        <AccordionCard
          cardTitle="Investments and savings (3-5%)"
          eventKeyNo="4"
        >
          <CardExpenses handleOnChange={contentChange} id="investments"/>
        </AccordionCard>

        <AccordionCard cardTitle="Charity expenses (5-10%)" eventKeyNo="5">
          <CardExpenses handleOnChange={contentChange} id="charity"/>
        </AccordionCard>

        <AccordionCard cardTitle="Other expenses (20-25%)" eventKeyNo="6">
          <CardExpenses handleOnChange={contentChange} id="other"/>
        </AccordionCard>

        <AccordionCard cardTitle="Waisted money (0-2%)" eventKeyNo="7">
          <CardExpenses handleOnChange={contentChange} id="waisted"/>
        </AccordionCard>
      </Accordion>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total Expenses" disabled />
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

export default AccordionExpenses
