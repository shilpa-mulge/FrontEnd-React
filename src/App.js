
import './App.css';
import ExpenseItem from './components/ExpenseItems';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure:"Bidar",
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49,
       date: new Date(2021, 2, 12) ,
       LocationOfExpenditure:"Aurad",
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure:"Bhalki",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure:"Humnabad",
    },
    
  ];
  return (
      <div>
        <h2>Let's get started!</h2>
  { expenses.map((exp)=>{
    return    <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} LocationOfExpenditure={exp.LocationOfExpenditure}></ExpenseItem>
        
      
   })}
    </div>

  );
}

export default App;
