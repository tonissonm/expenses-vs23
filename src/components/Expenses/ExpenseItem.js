import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){
    return(
        <div className="expense-item">
            <ExpenseDate date ={props.expensedata.date}/>
            <div className ="expense-item__description">
                <h2>{props.expensedata.title}</h2>
                <div className="expense-item__price">{props.expensedata.price}</div>
            </div>
        </div>
);
}
export default ExpenseItem;