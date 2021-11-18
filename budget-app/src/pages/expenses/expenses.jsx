import React from 'react';
import AccordionExpenses from '../../components/accordionExpenses/accordionExpenses';
import "./expenses.css";


const Expenses = () => {
    return (
    <div className="container-expenses">
        <div>
            <h6>You can name your expenses. </h6>
        </div>
        <AccordionExpenses>
        </AccordionExpenses>
    </div>
    )
}

export default Expenses;