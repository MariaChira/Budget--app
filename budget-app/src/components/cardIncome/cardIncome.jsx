import React, { useEffect, useState } from "react"

import { Container, FormControl, InputGroup } from "react-bootstrap"
import "./cardIncome.css"

const CardIncome = (props) => {
  const [firstMonthlyIncome, setFirstMonthlyIncome] = useState()
  const [firstYearlyIncome, setFirstYearlyIncome] = useState()
  const [firstDailyIncome, setFirstDailyIncome] = useState()

  const [secondMonthlyIncome, setSecondMonthlyIncome] = useState()
  const [secondYearlyIncome, setSecondYearlyIncome] = useState()
  const [secondDailyIncome, setSecondDailyIncome] = useState()

  const [thirdMonthlyIncome, setThirdMonthlyIncome] = useState()
  const [thirdYearlyIncome, setThirdYearlyIncome] = useState()
  const [thirdDailyIncome, setThirdDailyIncome] = useState()

  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState()
  const [totalYearlyIncome, setTotalYearlyIncome] = useState()
  const [totalDailyIncome, setTotalDailyIncome] = useState()

  // useEffect(() => {
  //   const storage = sessionStorage.getItem('incomeData');
  //   const incomeData = JSON.parse(storage)
  //   console.log(incomeData)
  //   // setFirstDailyIncome(incomeData.incomeData.firstDailyIncome)
  // }, [])

  useEffect(() => {
    const totalMonthly =
      (firstMonthlyIncome > 0 ? firstMonthlyIncome : 0) +
      (secondMonthlyIncome > 0 ? secondMonthlyIncome : 0) +
      (thirdMonthlyIncome > 0 ? thirdMonthlyIncome : 0)
    const totalYearly =
      (firstYearlyIncome > 0 ? firstYearlyIncome : 0) +
      (secondYearlyIncome > 0 ? secondYearlyIncome : 0) +
      (thirdYearlyIncome > 0 ? thirdYearlyIncome : 0)
    const totalDaily =
      (firstDailyIncome > 0 ? firstDailyIncome : 0) +
      (secondDailyIncome > 0 ? secondDailyIncome : 0) +
      (thirdDailyIncome > 0 ? thirdDailyIncome : 0)

    setTotalMonthlyIncome(totalMonthly)
    setTotalYearlyIncome(totalYearly)
    setTotalDailyIncome(totalDaily)
    const totalObj = { totalMonthly, totalYearly, totalDaily }
    props.handleOnChange({ [props.id]: totalObj })
  }, [firstMonthlyIncome, secondMonthlyIncome, thirdMonthlyIncome])

  const handleOnChange = (whichOne, value) => {
    // props.handleOnChange(">>>>>>>>>>>>>>>>>>")
    switch (whichOne) {
      case "first-monthly-income":
        setFirstMonthlyIncome(Number(value))
        setFirstYearlyIncome(Number(value) * 12)
        setFirstDailyIncome(Number(Math.round(value / 21)))
        break
      case "second-monthly-income":
        setSecondMonthlyIncome(Number(value))
        setSecondYearlyIncome(Number(value) * 12)
        setSecondDailyIncome(Number(Math.round(value / 21)))
        break
      case "third-monthly-income":
        setThirdMonthlyIncome(Number(value))
        setThirdYearlyIncome(Number(value) * 12)
        setThirdDailyIncome(Number(Math.round(value / 21)))
        break

      default:
        break
    }

    const incomeObj = {
      firstMonthlyIncome,
      firstYearlyIncome,
      firstDailyIncome,
      secondMonthlyIncome,
      secondYearlyIncome,
      secondDailyIncome,
      thirdMonthlyIncome,
      thirdYearlyIncome,
      thirdDailyIncome,
    }
    console.log(incomeObj)

    sessionStorage.setItem("incomeData", JSON.stringify(incomeObj))
  }

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
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={firstYearlyIncome}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={firstDailyIncome}
        />
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
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={secondYearlyIncome}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={secondDailyIncome}
        />
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
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={thirdYearlyIncome}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={thirdDailyIncome}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl
          aria-label="total-month"
          readOnly
          value={totalMonthlyIncome ? totalMonthlyIncome : 0}
        />
        <FormControl
          aria-label="total-year"
          readOnly
          value={totalYearlyIncome ? totalYearlyIncome : 0}
        />
        <FormControl
          aria-label="total-day"
          readOnly
          value={totalDailyIncome ? totalDailyIncome : 0}
        />
      </InputGroup>
    </Container>
  )
}

export default CardIncome

