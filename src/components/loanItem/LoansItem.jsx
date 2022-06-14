import React, { useEffect, useState } from "react";
import "./LoansItem.scss";

const LoansItem = ({ data, changeTotal, total }) => {
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
  // checking limits for investment
  const [guardAmount, setGuardAmount] = useState(false);
  const [guardTotal, setGuardTotal] = useState(false);

  const isShowModal = () => {
    setShowModal(!showModal);
    setValue("");
  };
  const changeValue = (e) => {
    setValue(+e.target.value);
  };

  // limit check
  useEffect(() => {
    // disabled btn at the beginning
    if (value > 0) {
      setBtnDisabled(false);
    } else if (value <= 0) {
      setBtnDisabled(true);
    }
    // disabled btn from limits
    if (value > amount) {
      setGuardAmount(true);
      setBtnDisabled(true);
    } else if (value < amount) {
      setGuardAmount(false);
    }
    if (value > total) {
      setGuardTotal(true);
      setBtnDisabled(true);
    } else if (value < amount) {
      setGuardTotal(false);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount((amount) => amount - value);
    setAviable((available) => available + value);
    setInvest(true);
    changeTotal(value);
    setValue("");
    isShowModal();
  };

  const ModalWindow = () => {
    return (
      <div className="wraperModal">
        <div className="modalWindow w-75">
          <button
            type="button"
            className="close btn"
            data-dismiss="modal"
            aria-label="Close"
            onClick={isShowModal}
          >
            <span aria-hidden="true">X</span>
          </button>
          <h2 >Invest in Loan {id}</h2>
          <p className="title">{title}</p>
          <p>Amount available ${available}</p>
          <p>Available credit limit : ${amount}</p>
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
          {guardAmount ? (
            <p className="error">Investment limit exceeded</p>
          ) : null}
          {guardTotal ? (
            <p className="error">
              Your total investment amount has been exceeded.<br/>
              Available amount: ${total}
            </p>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <li>
        <div>
          <h2>Loan name {id} </h2>
          <p>Available credit limit : ${amount}</p>
          <p>Available amount : ${available}</p>
        </div>
        <div className="buttons">
          {invest ? <span>invest</span> : null}

          <button className="btn btn-warning" onClick={isShowModal}>
            INVEST
          </button>
        </div>
      </li>

      {showModal ? <ModalWindow /> : null}
    </>
  );
};

export default LoansItem;
