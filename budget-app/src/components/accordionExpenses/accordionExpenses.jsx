import React from "react"

import { Accordion } from "react-bootstrap"
import AccordionCard from "../accordionCard/accordionCard"
import CardExpenses from "../cardExpenses/cardExpenses"

const AccordionExpenses = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <AccordionCard cardTitle="Vital expenses (20-25%)" eventKeyNo="1">
          <CardExpenses />
        </AccordionCard>
        <AccordionCard cardTitle="House expenses (20-25%)" eventKeyNo="2">
          <CardExpenses />
        </AccordionCard>
        <AccordionCard cardTitle="Trasport expenses (3-5%)" eventKeyNo="3">
          <CardExpenses />
        </AccordionCard>
        <AccordionCard
          cardTitle="Investments and savings (3-5%)"
          eventKeyNo="4"
        >
          <CardExpenses />
        </AccordionCard>
        <AccordionCard cardTitle="Charity expenses (5-10%)" eventKeyNo="5">
          <CardExpenses />
        </AccordionCard>
        <AccordionCard cardTitle="Other expenses (20-25%)" eventKeyNo="6">
          <CardExpenses />
        </AccordionCard>
        <AccordionCard cardTitle="Waisted money (0-2%)" eventKeyNo="7">
          <CardExpenses />
        </AccordionCard>
      </Accordion>
    </div>
  )
}

export default AccordionExpenses
