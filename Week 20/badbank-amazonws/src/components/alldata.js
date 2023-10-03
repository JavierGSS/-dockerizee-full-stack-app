import React from "react";
import { UserContext } from "./context.js";
import { Card, List } from "./context.js";

function AllData() {
  const ctx = React.useContext(UserContext);
  let list = ctx.activeUser[0].transactions.map((item) => {
    return !ctx.activeUser[0].inactive ? (
      <>
        <List
          key={item.date}
          type={item.type}
          date={item.date}
          amount={item.amount}
          style={{ fontFamilyBase: "Cormorant, serif" }}
        />
      </>
    ) : (
      <Card
        bgcolor="primary"
        txtcolor="white"
        header="Your transactions"
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
  });
  return list;
}
export default AllData;
