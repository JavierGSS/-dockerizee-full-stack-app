import { UserContext, Card } from "./context.js";
import React from "react";

function Logout() {
  const [show, setShow] = React.useState(false);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    if (ctx.activeUser[0].name !== "") {
      setShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.activeUser[0].name]);

  function handleLogout() {
    let checkLogout = window.confirm("Confirm you want to logout.");
    if (checkLogout) {
      alert(
        `You have successfully logged out, ${ctx.activeUser[0].name}. See you soon!`
      );
      ctx.activeUser = [
        {
          name: "",
          balance: "",
          inactive: true,
          transactions: [
            {
              type: "",
              date: "",
              amount: 0,
            },
          ],
        },
      ];
      setShow(false);
    } else return;
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Logout"
      title={`Welcome to your bank, ${ctx.activeUser[0].name}`}
      text={`Your balance is: $${ctx.activeUser[0].balance}`}
      body={
        <>
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
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      }
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank exit page"
      title="Please login to access your account"
      body={
        <>
          <img
            src="./images/coins.jpg"
            className="img-fluid"
            alt="Responsive"
          />
        </>
      }
    />
  );
}
export default Logout;
