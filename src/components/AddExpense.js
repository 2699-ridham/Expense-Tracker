import React,{useState} from 'react'
import "./AddExpense.css";

const AddExpense=(props) =>{
    const [text, setText] = useState('');
    const [num, setNum] = useState('');

    const textHandler = (event) => {
        setText(event.target.value);
    }

    const numHandler = (event) => {
        setNum(event.target.value);
    }

    const clickHandler = () => {
        if (!text || !num) {
            alert("Something is missing. Try Again");
        } else if (text.trim().length === 0) {
            alert("Text input can't be empty");
        } else {
            // console.log(text);
            // console.log(num);
            props.onAddData(text,num);
            setText("");
            setNum("");
        }
    }

    return (
        <div className='add-expense'>
            <h4>Add New Transaction</h4>
            <h5>Text</h5>
            <input type='text' value={text} className='input-container' placeholder='Enter Text...' onChange={textHandler} />
            <h5>Amount</h5>
            <h5>(negative-expense, positive-income)</h5>
            <input type='number' value={num} className='input-container' placeholder='Enter amount...' onChange={numHandler} />
            <button className='custom-button' type='submit' onClick={clickHandler}>Add Transaction</button>
        </div>
    )
}

export default AddExpense