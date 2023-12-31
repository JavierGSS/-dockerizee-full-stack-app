import React from "react";
import { UserContext, Card } from "./context.js";

function Withdraw() {
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

  function validateWithdraw(field, label) {
    if (!field) {
      setStatus(`Error: ${label} not provided`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    if (amount <= 0) {
      window.alert("Withdrawals must be greater than 0");
      setStatus(`Error: ${label} must be greater than 0`);
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }

    if (amount > balance) {
      window.alert(`Your maximum withdrawal amount is $${balance}`);
      setStatus(`Error: ${label} must not be greater than ${balance}`);
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if (!validateWithdraw(amount, "amount")) return;
    let checkAmount = window.confirm(
      `The amount to withdraw is $${amount}. Is this correct?`
    );
    if (checkAmount === true) {
      ctx.activeUser[0].balance =
        Number(ctx.activeUser[0].balance) - Number(amount);
      alert(
        `Successful withdrawal. Your new balance is $${ctx.activeUser[0].balance}`
      );
      setBalance(ctx.activeUser[0].balance);
      clearForm();
      ctx.activeUser[0].transactions.push({
        type: "Withdrawal",
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
      header="Withdraw"
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
            className="btn btn-light"
            disabled={buttonDisabled}
            onClick={handleWithdraw}
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
      header="Withdraw"
      title="Please login to access your account."
      body={
        <img src="./images/coins.jpg" className="img-fluid" alt="Responsive" />
      }
    />
  );
}
export default Withdraw;
