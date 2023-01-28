import React from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem=(props)=>{

    return(
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>
       <ExpenseDetails
       title={props.title}
       LocationOfExpenditure={props.LocationOfExpenditure}
       amount={props.amount}/>
       </Card>
    )
}
export default ExpenseItem;