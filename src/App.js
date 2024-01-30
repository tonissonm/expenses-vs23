import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from './components/Expenses/Expenses';
const App = () =>{
    const expenses =[
        {
    date: new Date(2023,11,6),
    title: 'Uus raamat',
    price:23.44
    },
    {date: new Date(2022,11,5),
    title: 'Makaron Shakaron',
    price:85.21

    }]
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
