import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
const App = () =>{
    const expenses =[
        {
    date: new Date(2023,11,6),
    title: 'Uus raamat',
    price:23.45
    },
    {date: new Date(2022,11,5),
    title: 'Makaron Shakaron',
    price:85.21

    }]
    const addExpenseHandler = (expense)=>{
        console.log('In App.js')
        console.log(expense)
    }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses ={expenses}/>
    </div>
  );
}

export default App;
