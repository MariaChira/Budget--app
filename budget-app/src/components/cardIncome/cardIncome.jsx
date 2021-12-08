import React, { useEffect, useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./cardIncome.css";

const CardIncome = (props) => {
  const incomeObj = {
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
  const [incomeUserData, setIncomeUserData] = useState(incomeObj);

  useEffect(() => {
    const incomeData = JSON.parse(
      sessionStorage.getItem(`income${props.incomeType}`)
    );
    if (incomeData) {
      setIncomeUserData(incomeData);
    }
  }, []);

  const handleOnChange = (whichOne, value) => {
    const tempObj = { ...incomeUserData };

    switch (whichOne) {
      case "first-monthly-income":
        tempObj.monthly[0] = value ? Number(value) : 0;
        tempObj.yearly[0] = value ? Number(value) * 12 : 0;
        tempObj.daily[0] = value ? Number((value / 21).toFixed(1)) : 0;
        break;
      case "second-monthly-income":
        tempObj.monthly[1] = value ? Number(value) : 0;
        tempObj.yearly[1] = value ? Number(value) * 12 : 0;
        tempObj.daily[1] = value ? Number((value / 21).toFixed(1)) : 0;
        break;
      case "third-monthly-income":
        tempObj.monthly[2] = value ? Number(value) : 0;
        tempObj.yearly[2] = value ? Number(value) * 12 : 0;
        tempObj.daily[2] = value ? Number((value / 21).toFixed(1)) : 0;
        break;
      case "name-income-0":
      case "name-income-1":
      case "name-income-2":
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
    setIncomeUserData(tempObj);
    if (props.handleOnChange && props.incomeType)
      props.handleOnChange(tempObj, props.incomeType);
  };

  return (
    <Container className="income-container">
      <InputGroup className="mb-1">
        <FormControl aria-label="Income Name" value="Income" disabled />
        <FormControl aria-label="Month" value="Month" disabled />
        <FormControl aria-label="Year" value="Year" disabled />
        <FormControl aria-label="Day" value="Day" disabled />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={incomeUserData?.name[0] || "Name"}
          onChange={(e) => {
            handleOnChange("name-income-0", e.target.value);
            console.log(e.target.value);
          }}
        />
        <FormControl
          aria-label="Month"
          placeholder={incomeUserData?.monthly[0] || "Amount"}
          onChange={(e) =>
            handleOnChange("first-monthly-income", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={incomeUserData.yearly[0]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={incomeUserData.daily[0]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={incomeUserData?.name[1] || "Name"}
          onChange={(e) => handleOnChange("name-income-1", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder={incomeUserData?.monthly[1] || "Amount"}
          onChange={(e) =>
            handleOnChange("second-monthly-income", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={incomeUserData.yearly[1]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={incomeUserData.daily[1]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl
          aria-label="Name"
          placeholder={incomeUserData?.name[2] || "Name"}
          onChange={(e) => handleOnChange("name-income-2", e.target.value)}
        />
        <FormControl
          aria-label="Month"
          placeholder={incomeUserData?.monthly[2] || "Amount"}
          onChange={(e) =>
            handleOnChange("third-monthly-income", e.target.value)
          }
        />
        <FormControl
          aria-label="Year"
          className="year-day"
          readOnly
          value={incomeUserData.yearly[2]}
        />
        <FormControl
          aria-label="Day"
          className="year-day"
          readOnly
          value={incomeUserData.daily[2]}
        />
      </InputGroup>

      <InputGroup className="mb-1">
        <FormControl aria-label="total" value="Total" disabled />
        <FormControl
          aria-label="total-month"
          readOnly
          value={incomeUserData.total.monthly}
        />
        <FormControl
          aria-label="total-year"
          readOnly
          value={incomeUserData.total.yearly}
        />
        <FormControl
          aria-label="total-day"
          readOnly
          value={incomeUserData.total.daily}
        />
      </InputGroup>
    </Container>
  );
};

export default CardIncome;
