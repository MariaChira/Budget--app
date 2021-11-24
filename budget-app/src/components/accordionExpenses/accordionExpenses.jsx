import React from "react"

import { Accordion } from "react-bootstrap"
import AccordionCard from "../accordionCard/accordionCard"
import CardExpenses from "../cardExpenses/cardExpenses"

import DescriptionCard from "../descriptionCard/descriptionCard"
import ExpensesTotal from "./expensesTotal"

let obj = {}

const AccordionExpenses = () => {

  const [expensesTotal, setExpensesTotal] = React.useState({})

  function contentChange(e) {
    obj = { ...obj, ...e }
    console.log(obj)
    
    if(obj.vital && obj.house && obj.transport && obj.investments && obj.charity && obj.other && obj.waisted){
      const totalMonthly = obj.vital.totalMonthly + obj.house.totalMonthly + obj.transport.totalMonthly + obj.investments.totalMonthly + obj.charity.totalMonthly + obj.other.totalMonthly + obj.waisted.totalMonthly
      const totalYearly =  obj.vital.totalYearly + obj.house.totalYearly + obj.transport.totalYearly + obj.investments.totalYearly + obj.charity.totalYearly + obj.other.totalYearly + obj.waisted.totalYearly
      const totalDaily =  obj.vital.totalDaily + obj.house.totalDaily + obj.transport.totalDaily + obj.investments.totalDaily + obj.charity.totalDaily + obj.other.totalDaily + obj.waisted.totalDaily
      setExpensesTotal({totalMonthly, totalYearly, totalDaily})
    }
    obj.totalExpenses = expensesTotal
    sessionStorage.setItem("totalExpenses", JSON.stringify(obj))
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

        <AccordionCard cardTitle="Investments and savings (3-5%)" eventKeyNo="4">
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
      <ExpensesTotal expensesTotal={expensesTotal}/>

     
    </div>
  )
}

export default AccordionExpenses
