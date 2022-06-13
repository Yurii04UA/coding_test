import React, { useEffect, useState } from "react";
import "./LoansItem.scss";

const LoansItem = ({ data,changeTotal}) => {
  const { title, id } = data;
  const [amount, setAmount] = useState(Number(data.amount.replace(",", "")));
  const [available, setAviable] = useState(
    Number(data.available.replace(",", ""))
  );
  const [term, setTerm] = useState((data.term_remaining / 86400).toFixed(1));

  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [invest, setInvest] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const changeValue = (e) => {
    setValue(+e.target.value);
  };

  // limit check
  useEffect(() => {
    if (value > amount) {
      console.log("you have exceeded the limit");
    }
    if (value > 0) {
      setBtnDisabled(false);
    } else if (value <= 0) {
      setBtnDisabled(true);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount((amount) => amount - value);
    setAviable((available) => available + value);
    setInvest(true);
    changeTotal('aaaaaaaaaaa')
    setValue("");
  };

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
          <div>
            <input
              autoFocus
              value={value}
              className="input-group-sm"
              type="number"
              onChange={changeValue}
            />
            <button
              className="btn btn-warning"
              onClick={handleSubmit}
              disabled={btnDisabled}
            >
              INVEST
            </button>
          </div>
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
          {invest ? <span>invest</span> : null}

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
