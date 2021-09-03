import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const today = new Date().toISOString().split("T")[0];
    console.log(today);
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     setEnteredTitle: '',
    //     setEnteredDate: '',
    //     setEnteredAmount: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.currentTarget.value);
        // ==============================
        // setUserInput({
        //     ...userInput,
        //     setEnteredTitle: event.currentTarget.value
        // })
        // setUserInput((prevState)=>{
        //     return { ...prevState, setenteredTitle: event.currentTarget.value }
        // });
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.currentTarget.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredAmount: e.currentTarget.value
        // })
        // ==============================

        // setUserInput((prevState)=>{
        //     return { ...prevState, setenteredAmount: e.currentTarget.value }
        // });
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.currentTarget.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredDate: e.currentTarget.value
        // })
        // ==============================
        // setUserInput((prevState)=>{
        //     return { ...prevState, setenteredDate: e.currentTarget.value }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate) 
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.changeState('close');
    };

    const cancelButtonHandler = (event) => {
        event.preventDefault();
        props.changeState('close');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                           onChange={titleChangeHandler}
                           value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" step="0.01" 
                        onChange={amountChangeHandler}
                        value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" max={today}
                        onChange={dateChangeHandler}
                        value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__cta">
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelButtonHandler} >Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;