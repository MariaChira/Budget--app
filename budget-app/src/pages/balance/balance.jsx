import React from "react"
import "./balance.css"

import { InputGroup, FormControl } from "react-bootstrap"

const Balance = () => {

  const incomeTotal = JSON.parse(sessionStorage.getItem("incomeTotal"))
  const expensesTotal = JSON.parse(sessionStorage.getItem("expensesTotal"))

  return (
    <div className="container-budget">
     

      <div className="balance-container">
      <InputGroup className="mb-1">
        <FormControl aria-label="Labels" disabled />
        <FormControl aria-label="Month" value="Per Month" disabled />
        <FormControl aria-label="Year" value="Per Year" disabled />
        <FormControl aria-label="Day" Value="Per Day" disabled />
      </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Income" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={incomeTotal?.totalMonthly || 0 }
          />
          
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={incomeTotal?.totalYearly || 0 }
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="day"
            readOnly
            value={incomeTotal?.totalDaily || 0 }
          />
        </InputGroup>
        <InputGroup className="mb-1">
        <FormControl aria-label="Labels"  disabled />
        <FormControl aria-label="Month" value="Per Month" disabled />
        <FormControl aria-label="Year" value="Per Year" disabled />
        <FormControl aria-label="Day" Value="Days worked" disabled />
      </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Expenses" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={expensesTotal?.totalMonthly || 0 }
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={expensesTotal?.totalYearly || 0 }
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days worked"
            readOnly
            value={expensesTotal?.totalDaily || 0 }
          />
        </InputGroup>
        <InputGroup className="mb-1">
        <FormControl aria-label="Labels"  disabled />
        <FormControl aria-label="Month" value="Per Month" disabled />
        <FormControl aria-label="Year" value="Per Year" disabled />
        <FormControl aria-label="Day" Value="Days Left" disabled />
      </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Balance" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={(incomeTotal?.totalMonthly - expensesTotal?.totalMonthly) || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={(incomeTotal?.totalYearly - expensesTotal?.totalYearly) || 0}
          />
          {/* Total days in balance is 365 (days a year) - total-expenses-days-worked */}
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days left"
            readOnly
            value={(260 - expensesTotal?.totalDaily) || 0}
          />
        </InputGroup>
      </div>
    </div>
  )
}

export default Balance
