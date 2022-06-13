import React from "react";
import "./LoansItem.scss";

const loansItem = ({data}) => {
  const {id,title,} = data
  console.log(id);
  return (
    <li>
      <div>
        <p>Loan name {id} </p>
        <p>Loan detalis</p>
      </div>
      <div className="buttons">
        <span>invest</span>
        <button className="btn btn-warning">INVEST</button>
      </div>
    </li>
  );
};

export default loansItem;
