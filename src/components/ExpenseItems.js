
import './ExpenseItem.css';
function ExpenseItem(props){
    return(
<<<<<<< HEAD
=======
      
>>>>>>> 4d8866daae2d9ba548c4efb6f41f219d8127d2c0
        <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div>{props.LocationOfExpenditure}</div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
    )
}
export default ExpenseItem;