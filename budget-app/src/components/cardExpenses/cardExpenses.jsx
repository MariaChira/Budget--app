import React from "react";
import { useState } from "react";

import { Container, InputGroup, FormControl} from "react-bootstrap";


const CardExpenses = (props) => {

  const [firstYearlyExpenses, setFirstYearlyExpenses] = useState()
  const [firstDailyExpenses, setFirstDailyExpenses] = useState()

  const [secondYearlyExpenses, setSecondYearlyExpenses] = useState()
  const [secondDailyExpenses, setSecondDailyExpenses] = useState()

  const [thirdYearlyExpenses, setThirdYearlyExpenses] = useState()
  const [thirdDailyExpenses, setThirdDailyExpenses] = useState()

  
  const handleOnChange = (eitherOne, value) => {
   
    switch (eitherOne) {
      case "first-monthly-expenses":
        setFirstYearlyExpenses(Number(value) * 12)
        setFirstDailyExpenses(Number(Math.round(value / 21)))
        break
      case "second-monthly-expenses":
        setSecondYearlyExpenses(Number(value) * 12)
        setSecondDailyExpenses(Number(Math.round(value / 21)))
        break
      case "third-monthly-expenses":
        setThirdYearlyExpenses(Number(value) * 12)
        setThirdDailyExpenses(Number(Math.round(value / 21)))
        break

      default:
        break
    }
  }

  

  const totalYearlyExpenses = firstYearlyExpenses + secondYearlyExpenses + thirdYearlyExpenses
  const totalDailyExpenses  = firstDailyExpenses + secondDailyExpenses + thirdDailyExpenses
  

  return (
    <Container className="expenses-container">
      <InputGroup className="mb-1">
        <FormControl aria-label="Expense Name" value="Expense Name" disabled />
        <FormControl aria-label="Month" value="Month" disabled />
        <FormControl aria-label="Year" value="Year" disabled />
        <FormControl aria-label="Day" Value="Day" disabled />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Expense Name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Expenses"
          onChange={(e) =>
            handleOnChange("first-monthly-expenses", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={firstYearlyExpenses} />
        <FormControl aria-label="Day" readOnly value={firstDailyExpenses} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Expense Name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Expenses"
          onChange={(e) =>
            handleOnChange("second-monthly-expenses", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={secondYearlyExpenses} />
        <FormControl aria-label="Day" readOnly value={secondDailyExpenses} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="Expense Name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="Monthly Expenses"
          onChange={(e) =>
            handleOnChange("third-monthly-expenses", e.target.value)
          }
        />
        <FormControl aria-label="Year" readOnly value={thirdYearlyExpenses} />
        <FormControl aria-label="Day" readOnly value={thirdDailyExpenses} />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl aria-label="total-month" value="total" />
        <FormControl aria-label="total-year" readOnly value={totalYearlyExpenses}  />
        <FormControl aria-label="total-day"  readOnly value={totalDailyExpenses} />
      </InputGroup>
    </Container>
    )
}

export default CardExpenses;