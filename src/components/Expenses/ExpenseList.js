import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItems"; 
const ExpenseList=(props)=>{
    let ExpenseUpdate=<h2 className="expenses-list__fallback">
    found no expenses.
</h2>
    if(props.items.length==1){
   ExpenseUpdate=<div>
 {   props.items.map((exp)=>(

<ExpenseItem

key={exp.id}

title={exp.title}

amount={exp.amount}

date={exp.date}>

</ExpenseItem>

))}
   <h2 className="expenses-list__fallback">
    Only single Expense here. Please add more...
</h2>
</div>
    }
return (<ul className="expense-list">
{ExpenseUpdate}
</ul>)

}
export default ExpenseList;