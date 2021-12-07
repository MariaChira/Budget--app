import React from "react";

import { Accordion } from "react-bootstrap";
import AccordionCard from "../accordionCard/accordionCard";
import CardIncome from "../cardIncome/cardIncome";
import DescriptionCard from "../descriptionCard/descriptionCard";
import IncomeTotal from "./incomeTotal";

const AccordionIncome = () => {
  const storedIncomeTotal = JSON.parse(sessionStorage.getItem("incomeTotal"));
  const [incomeTotal, setIncomeTotal] = React.useState(storedIncomeTotal);

  function contentChange(data, id) {
    sessionStorage.setItem(`income${id}`, JSON.stringify(data));

    const activeIncome = JSON.parse(sessionStorage.getItem("incomeactive"));
    const pasiveIncome = JSON.parse(sessionStorage.getItem("incomepasive"));

    const totalMonthly =
      activeIncome?.total.monthly + pasiveIncome?.total.monthly;
    const totalDaily = activeIncome?.total.daily + pasiveIncome?.total.daily;
    const totalYearly = activeIncome?.total.yearly + pasiveIncome?.total.yearly;

    setIncomeTotal({ totalMonthly, totalDaily, totalYearly });
    sessionStorage.setItem(
      "incomeTotal",
      JSON.stringify({ totalMonthly, totalDaily, totalYearly })
    );
  }

  return (
    <div>
      <Accordion>
        <AccordionCard cardTitle="Active Income" eventKeyNo="1">
          <CardIncome handleOnChange={contentChange} incomeType="active" />
          <DescriptionCard text="ex:salaries, bonuses, commissions"></DescriptionCard>
        </AccordionCard>
        <AccordionCard cardTitle="Pasive Income" eventKeyNo="2">
          <CardIncome handleOnChange={contentChange} incomeType="pasive" />
          <DescriptionCard text="ex:dividendes, rents, interest, copyright. (you should put the net income, after taxes) "></DescriptionCard>
        </AccordionCard>
      </Accordion>
      <IncomeTotal incomeTotal={incomeTotal} />
    </div>
  );
};

export default AccordionIncome;
