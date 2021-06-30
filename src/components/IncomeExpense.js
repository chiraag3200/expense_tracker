import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const total = (amounts) => amounts.reduce((sum, val) => sum + val, 0);

function IncomeExpense() {
  const {transactions} = useContext(GlobalContext)
  const incomeAmounts = transactions.flatMap(transaction => transaction.amount > 0 ? [transaction.amount] : []);
  const income = total(incomeAmounts)
  const expenseAmounts = transactions.flatMap(transaction => transaction.amount < 0 ? [transaction.amount] : []);
  const expense = total(expenseAmounts)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
