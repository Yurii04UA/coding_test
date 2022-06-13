import React, { useEffect, useState } from "react";
import "./LoansItem.scss";

const LoansItem = ({ data }) => {
  const { title, id, setTotal } = data;
  const [amount, setAmount] = useState(Number(data.amount.replace(",","")));
  const [available, setAviable] = useState(Number(data.available.replace(",","")));
  const [term, setTerm] = useState((data.term_remaining / 86400).toFixed(1));

  
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const changeValue = (e) => {
    setValue(+e.target.value);    
  };

  useEffect(()=>{
    if(value > amount){
      console.log('you have exceeded the limit')
    }
  },[value])

  const handleSubmit = (e) =>{
    e.preventDefault()
    setAmount(amount => amount- value)
    setAviable(available => available + value)
    setValue('')
  }

  const ModalWindow = () => {
    return (
      <div className="modalWindow w-75">
        <button
          type="button"
          className="close btn"
          data-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">X</span>
        </button>
        <h2>Invest in Loan {id}</h2>
        <p>{title}</p>
        <p>Amount available ${available}</p>
        <p>Loan ends in : {term} days</p>
        
        <form>
          <h4>Investment amount</h4>
          <input
            autoFocus
            value={value}
            className="input-group-sm"
            type="number"
          
            onChange={changeValue}
          />
          <button className="btn btn-warning"
            onClick={handleSubmit}
          
          >ivest</button>
        </form>
      </div>
    );
  };

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
          <button className="btn btn-warning" onClick={openModal}>
            INVEST
          </button>
        </div>
      </li>
      {showModal ? <ModalWindow /> : null}
      {/* <div className="modalWindow w-75">
        <button
          type="button"
          className="close btn"
          data-dismiss="modal"
          aria-label="Close"
          onClick={()=>setShowModal(false)}
        >
          <span aria-hidden="true">X</span>
        </button>
        <h2>Invest in Loan {id}</h2>
        <p>{title}</p>
        <p>Amount available ${available}</p>
        <p>Loan ends in : {term} days</p>
        <form>
          <h4>Investment amount</h4>
          <input value={value} 
            className="input-group-sm" 
            type="number"
            min={1}
            onChange={(e) => setValue(e.target.value)}
            />
          <button className="btn btn-warning">ivest</button>
        </form>
      </div> */}
    </>
  );
};

export default LoansItem;
