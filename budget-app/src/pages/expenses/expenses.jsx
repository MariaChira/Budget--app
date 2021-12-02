import React from 'react';
import AccordionExpenses from '../../components/accordionExpenses/accordionExpenses';
import "./expenses.css";


const Expenses = () => {
    return (
    <div className="container-expenses">
        <AccordionExpenses>
        </AccordionExpenses>
    </div>
    )
}

export default Expenses;