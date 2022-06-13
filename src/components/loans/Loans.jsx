import React, { useState } from "react";
import LoansItem from "../loanItem/LoansItem";
import "./Loans.scss";

const Loans = ({ data }) => {
  const [total, useTotal] = useState(238456);
 console.log(data);


  const loanList = data.map((item, i) => {
    return <LoansItem data={data[i]} key={i} />;
  });

  return (
    <div className="wrapper">
      <ul>{loanList}</ul>
      <p className="total"> Total amount available for investmant: ${total} </p>
    </div>
  );
};

export default Loans;
