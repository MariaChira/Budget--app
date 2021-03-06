import React, { useState, useEffect } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";

const CardExpenses = (props) => {
  const expensesObj = {
    daily: [0, 0, 0],
    monthly: [0, 0, 0],
    yearly: [0, 0, 0],
    name: ["", "", ""],
    total: {
      daily: 0,
      monthly: 0,
      yearly: 0,
    },
  };

  const [expensesUserData, setExpensesUserData] = useState(expensesObj);
  const incomeTotalData = JSON.parse(sessionStorage.getItem("incomeTotal"));

  useEffect(() => {
    const expensesData = JSON.parse(
      sessionStorage.getItem(`expenses${props.expensesType}`)
    );
    if (expensesData) {
      setExpensesUserData(expensesData);
    }
  }, []);

  const handleOnChange = (whichOne, value) => {
    const tempObj = { ...expensesUserData };
    let incomeTotalDaily = 0;
    if (incomeTotalData) incomeTotalDaily = incomeTotalData.totalDaily;
    switch (whichOne) {
      case "first-monthly-expenses":
        tempObj.monthly[0] = value ? Number(value) : 0;
        tempObj.yearly[0] = value ? Number(value) * 12 : 0;
        tempObj.daily[0] = value
          ? Number(Math.round(tempObj.yearly[0] / incomeTotalDaily))
          : 0;
        break;
      case "second-monthly-expenses":
        tempObj.monthly[1] = value ? Number(value) : 0;
        tempObj.yearly[1] = value ? Number(value) * 12 : 0;
        tempObj.daily[1] = value
          ? Number(Math.round(tempObj.yearly[1] / incomeTotalDaily))
          : 0;
        break;
      case "third-monthly-expenses":
        tempObj.monthly[2] = value ? Number(value) : 0;
        tempObj.yearly[2] = value ? Number(value) * 12 : 0;
        tempObj.daily[2] = value
          ? Number(Math.round(tempObj.yearly[2] / incomeTotalDaily))
          : 0;
        break;
      case "name-expenses-0":
      case "name-expenses-1":
      case "name-expenses-2":
        console.log(whichOne.slice(-1), value);
        const index = whichOne.slice(-1);
        tempObj.name[Number(index)] = value;
        break;

      default:
        break;
    }

    const totalMonthly = tempObj.monthly.reduce(
      (prev, current) => prev + current
    );
    const totalYearly = tempObj.yearly.reduce(
      (prev, current) => prev + current
    );
    const totalDaily = tempObj.daily.reduce((prev, current) => prev + current);
    tempObj.total = {
      daily: totalDaily,
      monthly: totalMonthly,
      yearly: totalYearly,
    };
    setExpensesUserData(tempObj);
    if (props.handleOnChange && props.expensesType)
      props.handleOnChange(tempObj, props.expensesType);
  };
  
  return (
    <div>
    <Container className="expenses-container">
      <InputGroup className="mb-1">
        <FormControl
          aria-label="Expenses Name"
          value="Expenses"
          disabled
        />
        <FormControl aria-label="Month" value="Month" disabled />
        <FormControl aria-label="Year" value="Year" disabled />
        <FormControl aria-label="Day" value="Days Worked" disabled />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={expensesUserData?.name[0] || "Name"}
          onChange={(e) => handleOnChange("name-expenses-0", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder={expensesUserData?.monthly[0] || "Amount"}
          onChange={(e) =>
            handleOnChange("first-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={expensesUserData.yearly[0]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={expensesUserData.daily[0]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={expensesUserData?.name[1] || "Name"}
          onChange={(e) => handleOnChange("name-expenses-1", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder={expensesUserData?.monthly[1] || "Amount"}
          onChange={(e) =>
            handleOnChange("second-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={expensesUserData.yearly[1]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={expensesUserData.daily[1]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={expensesUserData?.name[2] || "Name"}
          onChange={(e) => handleOnChange("name-expenses-2", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder={expensesUserData?.monthly[2] || "Amount"}
          onChange={(e) =>
            handleOnChange("third-monthly-expenses", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={expensesUserData.yearly[2]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={expensesUserData.daily[2]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl
          aria-label="total-month"
          readOnly
          value={expensesUserData.total.monthly}
        />
        <FormControl
          aria-label="total-year"
          readOnly
          value={expensesUserData.total.yearly}
        />
        <FormControl
          aria-label="total-day"
          readOnly
          value={expensesUserData.total.daily}
        />
      </InputGroup>
    </Container>
    </div>
  );
};

export default CardExpenses;
