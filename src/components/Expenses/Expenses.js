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
        const filterdExpenses=props.items.filter(expense=>{
            return expense.date.getFullYear().toString()===Userselected;
        })


return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={Userselected} onSelected={onUserSelected}/>
  {  filterdExpenses.map((exp)=>(

<ExpenseItem

key={exp.id}

title={exp.title}

amount={exp.amount}

date={exp.date}>

</ExpenseItem>

))}
</Card>
</div>
)
}
export default Expenses;