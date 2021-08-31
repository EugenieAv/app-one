import React, {createFactory, useState} from "react";

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
  
  // cf(***)
  let expensesContent = <p>No Expense found</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((item) => 
      <ExpenseItem
          key={item.id} 
          title={item.title}
          amount = {item.amount}
          date={item.date} />
    )
  }



  return(
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear} />
      
      {/* If no Expense during a year, let's a message       */}
          {/* first with a ternary statement : */}

              {/* {filteredExpenses.length === 0 ? (
                <p>No Expense found</p>
              ) : (
                filteredExpenses.map((item) => 
                  <ExpenseItem
                      key={item.id} 
                      title={item.title}
                      amount = {item.amount}
                      date={item.date} />
                )
              )} */}

          {/* with a javascipt tricks to more readable code */}
          {/* on utilise ici l'opératuer &&. Si la première condition est vérifiée, alors l'expression retournée est celle qui vient juste après le && */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses found</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((item) => 
          <ExpenseItem
              key={item.id} 
              title={item.title}
              amount = {item.amount}
              date={item.date} />
        )} */}
    {/* maintenant on assaye d'extraire la logique de la fonction return() cf((***)) */}

    {expensesContent}

    </Card>
  );
}

export default Expenses;