export default(state, action) => {
    switch(action.type){
        case 'delete_transaction':
            return {
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload )
            }
        case 'add_transaction':
            return {
                transactions : [...state.transactions, action.payload]
            }
        default:
            return{
                state
            }
    }
}