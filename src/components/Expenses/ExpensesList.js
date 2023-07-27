import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  // Because we split our components by bringing the lists here, we no longer have filteredExpenses so we can go ahead and use any name we want, in our case, we'll use items.

  if(props.items.length === 0){
    return<h2 className='expenses-list__fallback'>Found no Expenses</h2>
  }
  
  return (
    <ul className='expenses-list'>{
      props.items.map((expense) => 
    <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    />)
    }
    </ul>
  )
}

export default ExpensesList