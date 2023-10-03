import React from "react";
import { UserContext, Card } from "./context.js";

function Deposit() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [balance, setBalance] = React.useState(ctx.activeUser[0].balance);

  let show = false;
  if (ctx.activeUser[0].name !== "") {
    show = true;
  } else {
    show = false;
  }

  function clearForm() {
    setButtonDisabled(true);
    setAmount("");
  }

  function validateDeposit(field, label) {
    if (!field) {
      setStatus(`Error: ${label} not provided`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (amount <= 0) {
      setStatus(`Error: ${label} must be greater than 0`);
      window.alert("Deposits must be greater than $0");
      setButtonDisabled(true);
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validateDeposit(amount, "amount")) return;
    let checkAmount = window.confirm(
      `The amount to deposit is $${amount}. Is this correct?`
    );
    if (checkAmount) {
      ctx.activeUser[0].balance =
        Number(ctx.activeUser[0].balance) + Number(amount);
      alert(
        `Deposit successful. Your new balance is $${ctx.activeUser[0].balance}`
      );
      clearForm();
      setBalance(ctx.activeUser[0].balance);
      ctx.activeUser[0].transactions.push({
        type: "Deposit",
        date: Date(),
        amount: Number(amount),
      });
      console.log(ctx.activeUser[0].transactions);
    } else {
      alert("Please enter the correct amount");
      clearForm();
    }
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title={`Welcome to BadBank, ${ctx.activeUser[0].name}`}
      text={`Your balance is: $${balance}`}
      body={
        <>
          <input
            type="number"
            className="form-control"
            id="deposit"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => {
              setAmount(e.currentTarget.value);
              setButtonDisabled(false);
              if (!e.currentTarget.value) {
                setButtonDisabled(true);
              }
            }}
          />
          <br />
          <img
            src="./images/coins.jpg"
            className="img-fluid"
            alt="Responsive"
          />
          <br />
          <br />
          <button
            type="submit"
            disabled={buttonDisabled}
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Confirm
          </button>
        </>
      }
      status={status}
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Deposit"
      title="Please login to access your account."
      body={
        <img src="./images/coins.jpg" className="img-fluid" alt="Responsive" />
      }
    />
  );
}
export default Deposit;
