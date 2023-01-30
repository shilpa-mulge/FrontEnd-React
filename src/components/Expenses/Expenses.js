import './Expenses.css';
import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItems";
import ExpenseFilter from './ExpenseFilter';
const Expenses=(props)=>{
    const [Userselected, setUserSelected]=useState('2020');
    const onUserSelected=(userSelectedYear)=>{
  setUserSelected(userSelectedYear);
    }
return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={Userselected} onSelected={onUserSelected}/>
{ props.items.map((exp)=>{
return    <ExpenseItem
key={exp.id}
title={exp.title}
 amount={exp.amount}
  date={exp.date}>
  </ExpenseItem>


})}
</Card>
</div>
)
}
export default Expenses;