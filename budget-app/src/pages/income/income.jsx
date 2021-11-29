import React, { useEffect } from "react"
import "./income.css"

import AccordionIncome from "../../components/accordionIncome/accordionIncome"

const Income = () => {
  return (
    <div className="container-income">
      <div>
        <h6>You can name your income fiels. </h6>
      </div>
      <AccordionIncome />
    </div>
  )
}

export default Income
