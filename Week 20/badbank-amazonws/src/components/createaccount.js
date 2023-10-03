import React from "react";
import { UserContext, Card } from "./context.js";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setButtonDisabled(true);
  }

  function validate(field, label) {
    var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!field) {
      setStatus(`Error: ${label}`);
      window.alert(`Please enter a valid ${label}`);
      setButtonDisabled(true);
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (field === password && password.length < 8) {
      setStatus(`Error: ${label}`);
      window.alert("Passwords must be at least 8 characters long");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (field === email && !field.match(mailFormat)) {
      setStatus(`Error: ${label}`);
      window.alert(`Please enter a valid ${label}`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (
      !validate(name, "name") ||
      !validate(email, "email") ||
      !validate(password, "password")
    )
      return;
    else {
      ctx.users.push({
        name,
        email,
        password,
        balance: 0,
        transactions: [],
        inactive: true,
      });
      setShow(false);
      window.alert("Account successfully created");
    }
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      title="Please fill out all required fields"
      status={status}
      body={
        show ? (
          <>
            <img
              src="./images/coins.jpg"
              className="img-fluid"
              alt="Responsive"
            />
            <br />
            <strong>Name</strong>
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name..."
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setButtonDisabled(false);
                if (!e.currentTarget.value) {
                  setButtonDisabled(true);
                }
              }}
            />
            <br />
            <strong>Email</strong>
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                setButtonDisabled(false);
                if (!e.currentTarget.value) {
                  setButtonDisabled(true);
                }
              }}
            />
            <br />
            <strong>Password</strong>
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                setButtonDisabled(false);
                if (!e.currentTarget.value) {
                  setButtonDisabled(true);
                }
              }}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={buttonDisabled}
              onClick={handleCreate}
            >
              Create account
            </button>
          </>
        ) : (
          <>
            <h5>
              <strong>Account successfully created</strong>
            </h5>
            <div style={{ height: "1em" }} />
            <img
              src="./images/coins.jpg"
              className="img-fluid"
              alt="Responsive"
            />
            <div style={{ height: "1em" }} />
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
export default CreateAccount;
