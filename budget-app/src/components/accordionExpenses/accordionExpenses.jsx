import React, { useState, useEffect }from "react"

import { Accordion } from "react-bootstrap"
import AccordionCard from "../accordionCard/accordionCard"
import CardExpenses from "../cardExpenses/cardExpenses"

import DescriptionCard from "../descriptionCard/descriptionCard"
import ExpensesTotal from "./expensesTotal"

const AccordionExpenses = () => {
 
  const storedExpensesTotal = JSON.parse(
    sessionStorage.getItem("expensesTotal")
  )
  const [expensesTotal, setExpensesTotal] = useState(storedExpensesTotal)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const storedIncomeTotal = JSON.parse(sessionStorage.getItem("incomeTotal"))
    if (storedIncomeTotal && storedIncomeTotal.totalDaily) {
      setShowForm(true)
    }
  }, [])

  function contentChange(data, id) {
    sessionStorage.setItem(`expenses${id}`, JSON.stringify(data))

    const vitalExpenses = JSON.parse(sessionStorage.getItem("expensesvital"))
    const houseExpenses = JSON.parse(sessionStorage.getItem("expenseshouse"))
    const transportExpenses = JSON.parse(sessionStorage.getItem("expensestransport"))
    const investmentsExpenses = JSON.parse(sessionStorage.getItem("expensesinvestments"))
    const charityExpenses = JSON.parse(sessionStorage.getItem("expensescharity"))
    const otherExpenses = JSON.parse(sessionStorage.getItem("expensesother"))
    const waistedExpenses = JSON.parse(sessionStorage.getItem("expenseswaisted"))

    const totalMonthly =
      vitalExpenses?.total.monthly +
      houseExpenses?.total.monthly +
      transportExpenses?.total.monthly +
      investmentsExpenses?.total.monthly +
      charityExpenses?.total.monthly +
      otherExpenses?.total.monthly +
      waistedExpenses?.total.monthly
    const totalDaily =
      vitalExpenses?.total.daily +
      houseExpenses?.total.daily +
      transportExpenses?.total.daily +
      investmentsExpenses?.total.daily +
      charityExpenses?.total.daily +
      otherExpenses?.total.daily +
      waistedExpenses?.total.daily
    const totalYearly =
      vitalExpenses?.total.yearly +
      houseExpenses?.total.yearly +
      transportExpenses?.total.yearly +
      investmentsExpenses?.total.yearly +
      charityExpenses?.total.yearly +
      otherExpenses?.total.yearly +
      waistedExpenses?.total.yearly
    setExpensesTotal({ totalMonthly, totalDaily, totalYearly })
    sessionStorage.setItem(
      "expensesTotal",
      JSON.stringify({ totalMonthly, totalDaily, totalYearly })
    )
  }


  return showForm ? (
    <div>
      <Accordion>
        <AccordionCard cardTitle="Vital expenses (20-25%)" eventKeyNo="1">
          <CardExpenses handleOnChange={contentChange} expensesType="vital" />
          <DescriptionCard text="ex: food, hygiene products, medication" />
        </AccordionCard>

        <AccordionCard cardTitle="House expenses (20-25%)" eventKeyNo="2">
          <CardExpenses handleOnChange={contentChange} expensesType="house" />
          <DescriptionCard text="ex: rent, mortgage, gas, electricity, water, cable/netflix/hbo, internet, phone, garbage, house taxes, house insurance, repairs" />
        </AccordionCard>

        <AccordionCard cardTitle="Trasport expenses (3-5%)" eventKeyNo="3">
          <CardExpenses
            handleOnChange={contentChange}
            expensesType="transport"
          />
          <DescriptionCard text="ex: public transportation, car loan, fuel, insurance, vignette, tax, revision, repairs, car wash" />
        </AccordionCard>

        <AccordionCard
          cardTitle="Investments and savings (3-5%)"
          eventKeyNo="4"
        >
          <CardExpenses
            handleOnChange={contentChange}
            expensesType="investments"
          />
          <DescriptionCard text="ex: safety fund, emergency fund, education, retirement" />
        </AccordionCard>

        <AccordionCard cardTitle="Charity expenses (5-10%)" eventKeyNo="5">
          <CardExpenses handleOnChange={contentChange} expensesType="charity" />
          <DescriptionCard text="ex: SMS, food donation, money donation, time or any other valueable things" />
        </AccordionCard>

        <AccordionCard cardTitle="Other expenses (20-25%)" eventKeyNo="6">
          <CardExpenses handleOnChange={contentChange} expensesType="other" />
          <DescriptionCard text="ex: kindergarten, babysitter, parties, anniversaries, clothes, holidays, hairstyling, restaurants, electronics, furniture, maid, pets, health insurance, life insurance, hobbies" />
        </AccordionCard>

        <AccordionCard cardTitle="Waisted money (0-2%)" eventKeyNo="7">
          <CardExpenses handleOnChange={contentChange} expensesType="waisted" />
          <DescriptionCard text="ex: coffee, alchool, tobacco, bets " />
        </AccordionCard>
      </Accordion>
      <ExpensesTotal expensesTotal={expensesTotal} />
    </div>
  ) : (
    <div className="warrning-style">Please write your income first</div>
  )
}

export default AccordionExpenses
