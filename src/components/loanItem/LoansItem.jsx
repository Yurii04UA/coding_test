import React, { useState } from "react";
import "./LoansItem.scss";

const LoansItem = ({ data }) => {
  const { title, id, term_remaining } = data;
  const [amount, setAmount] = useState(data.amount);
  const [available, setAviable] = useState(data.available);
  const [term, setTerm] = useState((data.term_remaining / 86400).toFixed(1));
  return (
    <>
      <li>
        <div>
          <h2>Loan name {id} </h2>
          <p>Available credit limit : ${amount}</p>
          <p>available amount : ${available}</p>
        </div>
        <div className="buttons">
          <span>invest</span>
          <button className="btn btn-warning">INVEST</button>
        </div>
      </li>
      <div className="modalWindow w-75">
        <h2>Invest in Loan {id}</h2>
        <p>{title}</p>
        <p>Amount available ${available}</p>
        <p>Loan ends in : {term} days</p>
        <form>
          <h4>Investment amount</h4>
          <input className="input-group-sm" type="text" />
          <button className="btn btn-warning">ivest</button>
        </form>
      </div>
    </>
  );
};

export default LoansItem;
