import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
    <Header/>
     <Balance/>
     <IncomeExpense/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
