import React from "react";
import { UserContext, Card } from "./context.js";

function Home() {
  const ctx = React.useContext(UserContext);

  let show = false;
  if (ctx.activeUser[0].name !== "") {
    show = true;
  } else {
    show = false;
  }

  return show ? (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header={`Welcome to BadBank, ${ctx.activeUser[0].name}`}
      title={`Your balance is $${ctx.activeUser[0].balance}`}
      body={
        <img src="./images/coins.jpg" className="img-fluid" alt="Responsive" />
      }
    />
  ) : (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Welcome to BadBank"
      title="Please login to access your account."
      body={
        <img src="./images/coins.jpg" className="img-fluid" alt="Responsive" />
      }
    />
  );
}
export default Home;
