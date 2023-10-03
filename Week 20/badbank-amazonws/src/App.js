import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/context.js";
import "./App.css";
import NavBar from "./components/navbar.js";
import Home from "./components/home.js";
import CreateAccount from "./components/createaccount.js";
import Login from "./components/login.js";
import Balance from "./components/balance.js";
import Deposit from "./components/deposit.js";
import Logout from "./components/logout.js";
import Withdraw from "./components/withdraw.js";
import AllData from "./components/alldata.js";

import "./App.css";
let date = Date();

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "Javier",
                email: "jagasal@gmail.com",
                password: "secret",
                balance: 100,
                transactions: [
                  {
                    type: "Deposit",
                    fecha: date,
                    amount: 100,
                  },
                ],
              },
            ],
            activeUser: [
              {
                name: "",
                balance: 0,
                transactions: [
                  {
                    type: "",
                    date: "",
                    amount: 0,
                  },
                ],
                inactive: true,
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/CreateAccount/" Component={CreateAccount} />
            <Route path="/alldata/" Component={AllData} />
            <Route path="/balance/" Component={Balance} />
            <Route path="/deposit/" Component={Deposit} />
            <Route path="/withdraw/" Component={Withdraw} />
            <Route path="/login/" Component={Login} />
            <Route path="/logout/" Component={Logout} />
          </Routes>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
