var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      BadBank2
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current="page"
            href="#createAccount"
            onclick="loadCreateAccount()"
            id="createaccount"
          >
            Create Account
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="login" onclick="loadLogin()">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="deposit" onclick="loadDeposit()">
            Deposit
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="withdraw" onclick="loadWithdraw()">
            Withdraw
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="balance" onclick="loadBalance()">
            Balance
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="alldata" onclick="loadAllData()">
            All Data
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

ui.createAccount = `
  <div class="card text-center">
    <div class="card-header">
      <strong>Create a new account</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Name</h6>
      <input
        type="input"
        class="form-control"
        id="name"
        placeholder="Enter your full name"
      />
      <br />
      <h6 class="card-text">Email</h6>
      <input
        type="input"
        class="form-control"
        id="email"
        placeholder="Enter your email"
      />
      <br />
      <h6 class="card-text">Password</h6>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Enter your password"
      />
      <br />
      <button
        class="btn btn-primary"
        id="submit"
        type="submit"
        onclick="create()"
      >
        Create account
      </button>
      <div id="createStatus"></div>
    </div>
  </div>
`;

ui.login = ` 
  <div class="card text-center">
    <div class="card-header">
      <strong>Log in to account</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Email</h6>
      <input
        type="input"
        class="form-control"
        id="loginEmail"
        placeholder="Enter your email"
      />
      <br />
      <h6 class="card-text">Password</h6>
      <input
        type="password"
        class="form-control"
        id="loginPassword"
        placeholder="Enter your password"
      />
      <br />
      <a
        href="#"
        class="btn btn-primary"
        id="submit"
        type="submit"
        onclick="login()"
      >
        Login
      </a>
      <div id="loginStatus"></div>
    </div>
  </div>
`;

ui.deposit = `
  <div class="card text-center">
    <div class="card-header">
      <strong>Deposit</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Email</h6>
      <input
        type="input"
        class="form-control"
        id="depositEmail"
        placeholder="Enter your email"
      />
      <br/>
      <h6 class="card-text">Password</h6>
      <input
        type="password"
        class="form-control"
        id="depositPassword"
        placeholder="Enter your email"
      />
      <br/>
      <h6 class="card-text">Enter amount</h6>
      <input
        type="number"
        class="form-control"
        id="depositAmount"
        placeholder="Enter amount"
      />
      <br />
      <button
        class="btn btn-primary"
        type="submit"
        onclick="deposit()"
      >
        Deposit
      </button>
      <div id="depositStatus"></div>
    </div>
  </div>
`;

ui.withdraw = `
  <div class="card text-center">
    <div class="card-header">
      <strong>Withdraw</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Email</h6>
      <input
        type="input"
        class="form-control"
        id="withdrawEmail"
        placeholder="Enter your email"
      />
      <br/>
      <h6 class="card-text">Password</h6>
      <input
        type="password"
        class="form-control"
        id="withdrawPassword"
        placeholder="Enter your password"
      />
      <br/>
      <h6 class="card-text">Enter amount</h6>
      <input
        type="number"
        class="form-control"
        id="withdrawAmount"
        placeholder="Enter amount"
      />
      <br />
      <button
        class="btn btn-primary"
        type="submit"
        onclick="withdraw()"
      >
        Withdraw
      </button>
      <div id="withdrawStatus"></div>
    </div>
  </div>
`;

ui.balance = `
  <div class="card text-center">
    <div class="card-header">
      <strong>Balance</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Email</h6>
      <input
        type="input"
        class="form-control"
        id="balanceEmail"
        placeholder="Enter your email"
      />
      <br/>
      <h6 class="card-text">Password</h6>
      <input
        type="password"
        class="form-control"
        id="balancePassword"
        placeholder="Enter your password"
      />
      <br/>
      <button
        class="btn btn-primary"
        type="submit"
        onclick="balance()"
      >
        Show Balance
      </button>
      <div id="balanceStatus"></div>
    </div>
  </div>
`;

ui.default = `
  <div class="card text-center">
    <div class="card-header">
      <strong>BadBank Landing Page</strong>
    </div>
    <div class="card-body">
      <h6 class="card-text">Welcome to BadBank</h6>
      <p class="card-text">You can move around using the navigation bar</p>
      <img src="./credit.jpg" class="img-fluid" alt="Responsive image">
    </div>
  </div>
`;

ui.allData = `
<div class="card text-center">
<div class="card-header">
  <strong>All Data in Store</strong>
</div>
<br />
<button
  class="btn btn-primary"
  type="submit"
  onclick="allData()"
>
  Show All Data
</button>
<div id="allDataStatus"></div>
</div>
`;

var loadCreateAccount = function () {
  target.innerHTML = ui.createAccount;
};

var loadLogin = function () {
  target.innerHTML = ui.login;
};

var loadDeposit = function () {
  target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
  target.innerHTML = ui.withdraw;
};

var loadBalance = function () {
  target.innerHTML = ui.balance;
};

var loadAllData = function () {
  target.innerHTML = ui.allData;
};

var defaultModule = function () {
  target.innerHTML = ui.default;
};

defaultModule();
