import React from "react"
import { useState, useEffect } from "react"

import { Container, InputGroup, FormControl } from "react-bootstrap"

const CardExpenses = (props) => {
  const [firstMonthlyExpenses, setFirstMonthlyExpenses] = useState()
  const [firstYearlyExpenses, setFirstYearlyExpenses] = useState()
  const [firstDailyExpenses, setFirstDailyExpenses] = useState()

  const [secondMonthlyExpenses, setSecondMonthlyExpenses] = useState()
  const [secondYearlyExpenses, setSecondYearlyExpenses] = useState()
  const [secondDailyExpenses, setSecondDailyExpenses] = useState()

  const [thirdMonthlyExpenses, setThirdMonthlyExpenses] = useState()
  const [thirdYearlyExpenses, setThirdYearlyExpenses] = useState()
  const [thirdDailyExpenses, setThirdDailyExpenses] = useState()

  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState()
  const [totalYearlyExpenses, setTotalYearlyExpenses] = useState()
  const [totalDailyExpenses, setTotalDailyExpenses] = useState()

  useEffect(() => {
    const totalMonthly =
      (firstMonthlyExpenses > 0 ? firstMonthlyExpenses : 0) +
      (secondMonthlyExpenses > 0 ? secondMonthlyExpenses : 0) +
      (thirdMonthlyExpenses > 0 ? thirdMonthlyExpenses : 0)
    const totalYearly =
      (firstYearlyExpenses > 0 ? firstYearlyExpenses : 0) +
      (secondYearlyExpenses > 0 ? secondYearlyExpenses : 0) +
      (thirdYearlyExpenses > 0 ? thirdYearlyExpenses : 0)
    const totalDaily =
      (firstYearlyExpenses > 0 ? firstDailyExpenses : 0) +
      (secondDailyExpenses > 0 ? secondDailyExpenses : 0) +
      (thirdDailyExpenses > 0 ? thirdDailyExpenses : 0)

    setTotalMonthlyExpenses(totalMonthly)
    setTotalYearlyExpenses(totalYearly)
    setTotalDailyExpenses(totalDaily)
    const totalObj = { totalMonthly, totalYearly, totalDaily }
    props.handleOnChange({ [props.id]: totalObj })
  }, [firstMonthlyExpenses, secondMonthlyExpenses, thirdMonthlyExpenses])

  const handleOnChange = (eitherOne, value) => {
    
    switch (eitherOne) {
      case "first-monthly-expenses":
        setFirstMonthlyExpenses(Number(value))
        setFirstYearlyExpenses(Number(value) * 12)
        setFirstDailyExpenses(Number(Math.round(value / 21)))
        break
      case "second-monthly-expenses":
        setSecondMonthlyExpenses(Number(value))
        setSecondYearlyExpenses(Number(value) * 12)
        setSecondDailyExpenses(Number(Math.round(value / 21)))
        break
      case "third-monthly-expenses":
        setThirdMonthlyExpenses(Number(value))
        setThirdYearlyExpenses(Number(value) * 12)
        setThirdDailyExpenses(Number(Math.round(value / 21)))
        break

      default:
        break
    }
  }

  return (
    <Container className="expenses-container">
      <InputGroup className="mb-1">
        <FormControl aria-label="Expense Name" value="Expense Name" disabled />
        <FormControl aria-label="Month" value="Per Month" disabled />
        <FormControl aria-label="Year" value="Per Year" disabled />
        <FormControl aria-label="Day" Value="Days Worked" disabled />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="expense name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="your expense"
          onChange={(e) =>
            handleOnChange("first-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={firstYearlyExpenses}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={firstDailyExpenses}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="expense name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="your expense"
          onChange={(e) =>
            handleOnChange("second-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={secondYearlyExpenses}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={secondDailyExpenses}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder="expense name"
          onChange={(e) => handleOnChange("name-expense", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder="your expense"
          onChange={(e) =>
            handleOnChange("third-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={thirdYearlyExpenses}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={thirdDailyExpenses}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl
          aria-label="total-month"
          readOnly
          value={totalMonthlyExpenses ? totalMonthlyExpenses : 0}
        />
        <FormControl
          aria-label="total-year"
          readOnly
          value={totalYearlyExpenses ? totalYearlyExpenses : 0}
        />
        <FormControl
          aria-label="total-day"
          readOnly
          value={totalDailyExpenses ? totalDailyExpenses : 0}
        />
      </InputGroup>
    </Container>
  )
}

export default CardExpenses
