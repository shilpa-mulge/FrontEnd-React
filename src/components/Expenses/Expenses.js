import './Expenses.css';
import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItems";
const Expenses=(props)=>{
return (
    <Card className="expenses">
{ props.items.map((exp)=>{
return    <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} LocationOfExpenditure={exp.LocationOfExpenditure}></ExpenseItem>


})}
</Card>
)
}
export default Expenses;