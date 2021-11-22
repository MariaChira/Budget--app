import React from "react"
import "./balance.css"

import { InputGroup, FormControl } from "react-bootstrap"

const Balance = () => {
  return (
    <div className="container-budget">
      <div className="balance-container">
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Income" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value=""
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value=""
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="day"
            readOnly
            value=""
          />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Expenses" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value=""
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value=""
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days worked"
            readOnly
            value=""
          />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Balance" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value=""
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value=""
          />
          {/* Total days in balance is 365 (days a year) - total-expenses-days-worked */}
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days left"
            readOnly
            value=""
          />
        </InputGroup>
      </div>
    </div>
  )
}

export default Balance
