import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const selectDataHandler = (value) => {
    setFilteredYear(value);
  };

  const byYear = (arr) => {
    // eslint-disable-next-line eqeqeq
    return filteredYear == 'All'
      ? true
      : // eslint-disable-next-line eqeqeq
        arr.date.getFullYear() == filteredYear;
  };

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectDataHandler}
      />
      {props.items.filter(byYear).map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
