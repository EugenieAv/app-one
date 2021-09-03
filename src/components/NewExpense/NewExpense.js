import React, {useState} from 'react';
import ClosedForm from './ClosedForm';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const [formState, setFormState] = useState('close');
    console.log(formState);

    const changeStateHandler = (value) => {
        setFormState(value);
    }

    return(
        <div className="new-expense">
            {formState === 'close' && <ClosedForm changeState={changeStateHandler}/>}
            {formState === 'open' && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} changeState={changeStateHandler} />}
 
            {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
          </div>
    )
}
export default NewExpense;