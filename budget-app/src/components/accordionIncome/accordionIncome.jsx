import React from "react"

import Accordion from "react-bootstrap/Accordion"
import AccordionCard from "../accordionCard/accordionCard"
import CardIncome from "../cardIncome/cardIncome"
import DescriptionCard from "../descriptionCard/descriptionCard"
import IncomeTotal from "./incomeTotal"



let obj = {}

const AccordionIncome = () => {
  const [incomeTotal, setIncomeTotal] = React.useState({})

  function contentChange(e) {
    obj = { ...obj, ...e }
    console.log(obj)
    
    if(obj.active && obj.pasive){
      const totalMonthly = obj.active.totalMonthly + obj.pasive.totalMonthly
      const totalYearly = obj.active.totalYearly + obj.pasive.totalYearly
      const totalDaily = obj.active.totalDaily + obj.pasive.totalDaily
      setIncomeTotal({totalMonthly, totalYearly, totalDaily})
    }
    obj.totalIncome = incomeTotal
    sessionStorage.setItem("totalIncome", JSON.stringify(obj))
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
      <IncomeTotal incomeTotal={incomeTotal}/>
    </div>
  )
}

export default AccordionIncome
