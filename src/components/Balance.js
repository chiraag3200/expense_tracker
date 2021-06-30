import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const total = (amounts) => amounts.reduce((sum, val) => sum + val, 0);

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    var balance = total(amounts)
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}

export default Balance
