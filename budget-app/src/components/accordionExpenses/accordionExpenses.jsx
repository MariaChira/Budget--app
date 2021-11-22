import React from "react"

import { Accordion } from "react-bootstrap"
import AccordionCard from "../accordionCard/accordionCard"
import CardExpenses from "../cardExpenses/cardExpenses"
import { InputGroup, FormControl } from "react-bootstrap"
import DescriptionCard from "../descriptionCard/descriptionCard"

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
          <DescriptionCard text="ex: food, hygiene products, medication"/>
        </AccordionCard>

        <AccordionCard cardTitle="House expenses (20-25%)" eventKeyNo="2">
          <CardExpenses handleOnChange={contentChange} id="house" />
          <DescriptionCard text="ex: rent, mortgage, gas, electricity, water, cable/netflix/hbo, internet, phone, garbage, house taxes, house insurance, repairs"/>
        </AccordionCard>

        <AccordionCard cardTitle="Trasport expenses (3-5%)" eventKeyNo="3">
          <CardExpenses handleOnChange={contentChange} id="transport" />
          <DescriptionCard text="ex: public transportation, car loan, fuel, insurance, vignette, tax, revision, repairs, car wash"/>
        </AccordionCard>

        <AccordionCard
          cardTitle="Investments and savings (3-5%)"
          eventKeyNo="4"
        >
          <CardExpenses handleOnChange={contentChange} id="investments"/>
          <DescriptionCard text="ex: safety fund, emergency fund, education, retirement"/>
        </AccordionCard>

        <AccordionCard cardTitle="Charity expenses (5-10%)" eventKeyNo="5">
          <CardExpenses handleOnChange={contentChange} id="charity"/>
          <DescriptionCard text="ex: SMS, food donation, money donation, time or any other valueable things"/>
        </AccordionCard>

        <AccordionCard cardTitle="Other expenses (20-25%)" eventKeyNo="6">
          <CardExpenses handleOnChange={contentChange} id="other"/>
          <DescriptionCard text="ex: kindergarten, babysitter, parties, anniversaries, clothes, holidays, hairstyling, restaurants, electronics, furniture, maid, pets, health insurance, life insurance, hobbies"/>
        </AccordionCard>

        <AccordionCard cardTitle="Waisted money (0-2%)" eventKeyNo="7">
          <CardExpenses handleOnChange={contentChange} id="waisted"/>
          <DescriptionCard text="ex: coffee, alchool, tobacco, bets "/>
        </AccordionCard>
      </Accordion>

      {/* 
      Values: 
      Total: month: VITAL total month expenses + HOUSE total month expenses + ... + WAISTED MONEY total month expenses
           : year: VITAL total year expenses + HOUSE total year expenses + ... + WAISTED MONEY total year expenses
           : day :VITAL total days worked + HOUSE total days worked + ... + WAISTED MONEY total days worked
       */}

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
