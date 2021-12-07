import React from "react";

import { InputGroup, FormControl } from "react-bootstrap";

const IncomeTotal = ({ incomeTotal }) => (
  <InputGroup className="mb-1">
    <FormControl aria-label="total" value="Total Income" disabled />
    <FormControl
      aria-label="total-month"
      placeholder="month"
      readOnly
      value={incomeTotal?.totalMonthly || 0}
    />
    <FormControl
      aria-label="total-year"
      placeholder="year"
      readOnly
      value={incomeTotal?.totalYearly || 0}
    />
    <FormControl
      aria-label="total-day"
      placeholder="day"
      readOnly
      value={incomeTotal?.totalDaily || 0}
    />
  </InputGroup>
);

export default IncomeTotal;
