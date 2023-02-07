import React from 'react';
import './MyBalance.css';

function MyBalance(props) {
    return (
        <div className="my-balance">
            <h4>YOUR BALANCE</h4>
            <h1 className="amount"><b>Rs. {props.totalAmount}</b></h1>
        </div>

    );
}

export default MyBalance;