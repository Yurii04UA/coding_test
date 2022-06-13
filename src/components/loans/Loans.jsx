import React, { useState } from "react";
import LoansItem from "../loanItem/LoansItem";
import "./Loans.scss";

const Loans = ({ data }) => {
  const [total, setTotal] = useState(238456);
 console.log(data);

function changeTotal (e) {
 console.log(e);
}
  const loanList = data.map((item, i) => {
    return <LoansItem data={item} key={i} changeTotal={setTotal} total={total} />;
  });

  return (
    <div className="wrapper">
      <ul>{loanList}</ul>
      <p className="total"> Total amount available for investmant: ${total} </p>
    </div>
  );
};

export default Loans;
