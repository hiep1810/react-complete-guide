import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle((prevState) => {
      return event.target.value;
    });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount((prevState) => {
      return event.target.value;
    });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate((prevState) => {
      return event.target.value;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      // eslint-disable-next-line eqeqeq
      title: enteredTitle || enteredTitle === 0 ? enteredTitle : 'No Title',
      // eslint-disable-next-line eqeqeq
      amount: !!enteredAmount || enteredAmount === 0 ? enteredAmount : '0',
      date:
        // eslint-disable-next-line eqeqeq
        !!enteredDate || enteredDate === 0 ? new Date(enteredDate) : new Date(),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-1-1'
            max='2022-08-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <input
        className='new-expense__actions'
        type='submit'
        value='Submit'
      ></input>
    </form>
  );
};

export default ExpenseForm;
