import React from "react";

import { InputGroup, FormControl } from "react-bootstrap";

const ExpensesTotal = ({ expensesTotal }) => (
  <InputGroup className="mb-1">
    <FormControl aria-label="total" value="Total Expenses" disabled />
    <FormControl
      aria-label="total-month"
      placeholder="month"
      readOnly
      value={expensesTotal?.totalMonthly || 0}
    />
    <FormControl
      aria-label="total-year"
      placeholder="year"
      readOnly
      value={expensesTotal?.totalYearly || 0}
    />
    <FormControl
      aria-label="total-day"
      placeholder="day"
      readOnly
      value={expensesTotal?.totalDaily || 0}
    />
  </InputGroup>
);

export default ExpensesTotal;
