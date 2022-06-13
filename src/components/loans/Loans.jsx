import React, { useState } from "react";
import LoansItem from "../loanItem/LoansItem";
import "./Loans.scss";


const Loans = ({data}) => {
 const [total,useTotal] = useState(238456)

  console.log(data);
  return (
      <div className="wrapper">
        <ul>
          <LoansItem data={data[0]}/>
          {/* <li>
            <div>
              <p>Loan name {data[0].id}</p>
              <p>Loan detalis</p>
            </div>
            <div className="buttons">
              <span>invest</span>
              <button className="btn btn-warning">INVEST</button>
            </div>
          </li>
          <li>
            <div>
              <p>Loan name 1</p>
              <p>Loan detalis</p>
            </div>
            <div className="buttons">
              <span>invest</span>
              <button className="btn btn-warning">INVEST</button>
            </div>
          </li>
          <li>
            <div>
              <p>Loan name 1</p>
              <p>Loan detalis</p>
            </div>
            <div className="buttons">
              <span>invest</span>
              <button className="btn btn-warning">INVEST</button>
            </div>
          </li> */}
        </ul>
        <p className="total"> Total amount available for investmant: ${total} </p>
      </div>
  );
};

export default Loans;
