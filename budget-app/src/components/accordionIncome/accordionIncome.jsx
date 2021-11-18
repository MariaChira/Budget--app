import React from "react"

import Accordion from "react-bootstrap/Accordion"
import AccordionCard from "../accordionCard/accordionCard"
import CardIncome from "../cardIncome/cardIncome"

const AccordionIncome = () => {
  function contentChange(e) {
    console.log(e.target.name, e.target.value)
  }
  return (
    <div>
      <Accordion>
        <AccordionCard cardTitle="Active Income" eventKeyNo="active-income-0">
          <CardIncome header={[1, 2, 3, 4]} handleOnChange={contentChange} />
        </AccordionCard>
        <AccordionCard cardTitle="Pasive Income" eventKeyNo="pasive-income-0">
          <CardIncome />
        </AccordionCard>
      </Accordion>
    </div>
  )
}

export default AccordionIncome
