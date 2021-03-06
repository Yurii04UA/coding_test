import React, { useState } from "react";
import LoansItem from "../loanItem/LoansItem";
import "./Loans.scss";

const Loans = ({ data }) => {
  const [total, setTotal] = useState(238456);


function changeTotal (e) {
 setTotal(total => total - e )
}
  const loanList = data.map((item) => {
    return <LoansItem data={item} key={item.id} changeTotal={changeTotal} total={total}/>;
  });

  return (
    <div className="wrapper">
      <ul>{loanList}</ul>
      <p className="total"> Total amount available for investmant: ${total} </p>
    </div>
  );
};

export default Loans;
