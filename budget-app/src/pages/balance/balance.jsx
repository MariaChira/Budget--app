import React from "react";
import "./balance.css";

import { InputGroup, FormControl, Button } from "react-bootstrap";

const Balance = () => {
  const incomeTotal = JSON.parse(sessionStorage.getItem("incomeTotal"));
  const expensesTotal = JSON.parse(sessionStorage.getItem("expensesTotal"));

  return (
    <div className="container-budget">
      <div className="balance-container">
        <InputGroup className="mb-1">
          <FormControl aria-label="Labels" disabled />
          <FormControl aria-label="Month" value="Per Month" disabled />
          <FormControl aria-label="Year" value="Per Year" disabled />
          <FormControl aria-label="Day" value="Per Day" disabled />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Income" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={incomeTotal?.totalMonthly || 0}
          />

          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={incomeTotal?.totalYearly || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="day"
            readOnly
            value={incomeTotal?.totalDaily || 0}
          />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="Labels" disabled />
          <FormControl aria-label="Month" value="Per Month" disabled />
          <FormControl aria-label="Year" value="Per Year" disabled />
          <FormControl aria-label="Day" value="Days worked" disabled />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Total Expenses" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={expensesTotal?.totalMonthly || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={expensesTotal?.totalYearly || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days worked"
            readOnly
            value={expensesTotal?.totalDaily || 0}
          />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="Labels" disabled />
          <FormControl aria-label="Month" value="Per Month" disabled />
          <FormControl aria-label="Year" value="Per Year" disabled />
          <FormControl aria-label="Day" value="Days Left" disabled />
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl aria-label="total" value="Balance" disabled />
          <FormControl
            className="year-day"
            aria-label="total-month"
            placeholder="month"
            readOnly
            value={incomeTotal?.totalMonthly - expensesTotal?.totalMonthly || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-year"
            placeholder="year"
            readOnly
            value={incomeTotal?.totalYearly - expensesTotal?.totalYearly || 0}
          />
          <FormControl
            className="year-day"
            aria-label="total-day"
            placeholder="days left"
            readOnly
            value={expensesTotal?.totalDaily > 0 ? 260 - expensesTotal?.totalDaily : 0}
          />
        </InputGroup>
      </div>
      

      {incomeTotal?.totalMonthly - expensesTotal?.totalMonthly > 0 ? (
        <div className="balance-message">
          <p>Your balance is positive, you are doing a good job!</p>
        </div>
      ) : incomeTotal?.totalMonthly - expensesTotal?.totalMonthly !== 0 ?(
        <div className="balance-message">
          <p>Your balance is not positive. Here is some financial guidance!</p>
          <a
            href="https://www.investopedia.com/best-personal-finance-classes-5116631"
            target="blank" rel="noreferrer">
            <Button variant="dark">Learn about money</Button>
          </a>
        </div>
      ) : <div className="balance-message">
        <p>Go and write your income and expenses</p>
      </div>} 
    </div>
  );
};

export default Balance;
