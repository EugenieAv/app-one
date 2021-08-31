import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  
  
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.expenses.filter(item =>
    item.date.getFullYear() === parseInt(filteredYear,10)
  );
  
  return(
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear} />
  
      {filteredExpenses.map((item) => 
        <ExpenseItem
            key={item.id} 
            title={item.title}
            amount = {item.amount}
            date={item.date} />
        )
      }
    </Card>
  );
}

export default Expenses;