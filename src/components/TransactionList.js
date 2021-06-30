import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {
    const {transactions, deleteTransaction} = useContext(GlobalContext)
    // console.log(context)
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    transactions.map(transaction => 
                    <li className={transaction.amount > 0 ? "plus" : "minus" }>
                    {transaction.text} 
                    <span>${transaction.amount}</span>
                    <button onClick = {() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TransactionList
