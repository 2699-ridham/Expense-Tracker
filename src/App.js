import React, { useState } from 'react';
import './App.css';
import AddExpense from './components/AddExpense';
import HistoryR from './components/HistoryR';
import IncomeExpense from './components/IncomeExpense';
import MyBalance from './components/MyBalance';

function App() {

  const [list, setList] = useState([]);
  const [income, setIncome] = useState(0);
  const [exp, setExp] = useState(0);
  const [total, setTotal] = useState(0);

  const AddData = (text, amt)=>{
    if(parseInt(amt) >= 0){
      setIncome(parseInt(income) + parseInt(amt));
    }else{
      setExp(parseInt(exp) + parseInt(amt));
    }

    setTotal(parseInt(total) + parseInt(amt));

    setList([
        ...list,{
          text: text,
          amount: amt,
          id: new Date().getTime().toString()
        }
      ])

    // console.log(list);
  }

  return (
    <div className="back-container">
      <div className="expense-container">
        <h2>Expense Tracker</h2>
        <MyBalance totalAmount={total} />
        <IncomeExpense income={income} expense={exp} />
        <HistoryR listData={list}/>
        <AddExpense onAddData={AddData}/>
      </div>
    </div>
  )
}

export default App;