import React from 'react';

const ClosedForm = (props) => {
    const onClickHandler = (event) => {
        event.preventDefault();
        props.changeState('open');
    }


    return(
        <button type="button" className="new-expense" onClick={onClickHandler} >
            Add New Expense
        </button>
    )
}

export default ClosedForm;