import React, {useContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]
}

export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({ 
            type : 'delete_transaction',
            payload : id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type : 'add_transaction',
            payload : transaction
        })
    }
    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
