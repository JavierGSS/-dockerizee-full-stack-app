import React from "react";
import { UserContext, Card } from "./context.js";

function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    if (ctx.activeUser[0].inactive) {
      setShow(true);
    } else if (!ctx.activeUser[0].inactive) {
      setShow(false);
    }
  }, [ctx.activeUser]);

  function clearForm() {
    setEmail("");
    setPassword("");
    setShow(true);
    setButtonDisabled(true);
  }

  function validate(field, label) {
    let positive;
    var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!field) {
      window.alert("Email not provided");
      setStatus(`Error: ${label} not provided`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (ctx.users.some((item) => item.email === email)) {
      positive = ctx.users.filter((item) => item.email === email);
    } else if (field === email && !field.match(mailFormat)) {
      setStatus(`Error: incorrect ${label}`);
      window.alert(`Please enter a valid ${label}`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      window.alert(
        `Sorry, the email ${email} is not registered. Please try again or create an account.`
      );
      setStatus("Error: email not registered");
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }

    if (positive[0].password === password) {
      console.log("password OK");
      ctx.activeUser[0].name = positive[0].name;
      ctx.activeUser[0].balance = positive[0].balance;
      ctx.activeUser[0].transactions = positive[0].transactions;
      ctx.activeUser[0].inactive = false;
      console.log("Active user: ", ctx.activeUser);
      return true;
    } else {
      setStatus("Error: incorrect password");
      window.alert("Incorrect password. Please try again");
      setTimeout(() => setStatus(""), 3000);
      clearForm();
      return false;
    }
  }

  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    clearForm();
    setShow(false);
    window.alert(`You have successfully logged in, ${ctx.activeUser[0].name}`);
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            <h5>
              <strong>Please enter your credentials</strong>
            </h5>
            <img
              src="./images/coins.jpg"
              className="img-fluid"
              alt="Responsive"
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
                } else {
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
              onClick={handleLogin}
            >
              <strong>Login</strong>
            </button>
          </>
        ) : (
          <>
            <h5>
              <strong>Welcome to BadBank, {ctx.activeUser[0].name}</strong>
              <br />
              <br />
              <img
                src="./images/coins.jpg"
                className="img-fluid"
                alt="Responsive"
              />
            </h5>
          </>
        )
      }
    />
  );
}
export default Login;
