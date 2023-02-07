import React from "react";
import "./HistoryR.css"

function HistoryR(props) {
    // const upperCase = props.text.slice(0,1);
    // const capitalWord = upperCase.upperCase()
    return (
        <div className="history-container">
            <h4 className="history">HISTORY</h4>
            <ul className="block">
                {props.listData.map((value) => {
                    return (<li key={value.id} className={value.amount < 0 ? "negative" : "positive"}>
                        {value.text}
                        <span>
                            {value.amount < 0 ? "-" : "+"}
                            {Math.abs(value.amount)}
                        </span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HistoryR;