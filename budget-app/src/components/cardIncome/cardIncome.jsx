import React from "react"

import InputGroup from "react-bootstrap/InputGroup"
import { Container, FormControl } from "react-bootstrap"
import "./cardIncome.css"
import { useState } from "react"

const CardIncome = (props) => {
  
  const [firstYearlyIncome, setFirstYearlyIncome] = useState()
  const [firstDailyIncome, setFirstDailyIncome] = useState()

  const [secondYearlyIncome, setSecondYearlyIncome] = useState()
  const [secondDailyIncome, setSecondDailyIncome] = useState()

  const [thirdYearlyIncome, setThirdYearlyIncome] = useState()
  const [thirdDailyIncome, setThirdDailyIncome] = useState()

  
  const handleOnChange = (whichOne, value) => {
   
    switch (whichOne) {
      case "first-monthly-income":
        setFirstYearlyIncome(Number(value) * 12)
        setFirstDailyIncome(Number(Math.round(value / 21)))
        break
      case "second-monthly-income":
        setSecondYearlyIncome(Number(value) * 12)
        setSecondDailyIncome(Number(Math.round(value / 21)))
        break
      case "third-monthly-income":
        setThirdYearlyIncome(Number(value) * 12)
        setThirdDailyIncome(Number(Math.round(value / 21)))
        break

      default:
        break
    }
  }

  

  const totalYearlyIncome  = firstYearlyIncome + secondYearlyIncome + thirdYearlyIncome
  const totalDailyIncome  = firstDailyIncome + secondDailyIncome + thirdDailyIncome
  

  return (
    <Container className="income-container">
      <InputGroup className="mb-1">
        <FormControl aria-label="Income Name" value="Income Name" disabled />
        <FormControl aria-label="Month" value="Month" disabled />
        <FormControl aria-label="Year" value="Year" disabled />
        <FormControl aria-label="Day" Value="Day" disabled />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Income Name"
          onChange={(e) => handleOnChange("name-income", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Income"
          onChange={(e) =>
            handleOnChange("first-monthly-income", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={firstYearlyIncome} />
        <FormControl aria-label="Day" readOnly value={firstDailyIncome} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Income Name"
          onChange={(e) => handleOnChange("name-income", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Income"
          onChange={(e) =>
            handleOnChange("second-monthly-income", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={secondYearlyIncome} />
        <FormControl aria-label="Day" readOnly value={secondDailyIncome} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Income Name"
          onChange={(e) => handleOnChange("name-income", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Income"
          onChange={(e) =>
            handleOnChange("third-monthly-income", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={thirdYearlyIncome} />
        <FormControl aria-label="Day" readOnly value={thirdDailyIncome} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl aria-label="total-month" value="total" />
        <FormControl aria-label="total-year" readOnly value={totalYearlyIncome}  />
        <FormControl aria-label="total-day"  readOnly value={totalDailyIncome} />
      </InputGroup>
    </Container>
  )
}

export default CardIncome
