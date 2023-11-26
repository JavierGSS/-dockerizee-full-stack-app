const ctx = {
  accounts: [
    {
      name: "peter",
      email: "peter@mit.edu",
      password: "secret",
      balance: 0,
    },
  ],
};

function create() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const status = document.getElementById("createStatus");
  ctx.accounts.push({
    name: name.value,
    email: email.value,
    password: password.value,
    balance: 0,
  });

  // update status & clear form
  name.value = "";
  email.value = "";
  password.value = "";
  balance.value = "";
  status.innerHTML = "Account successfully created";
}

function allData() {
  const status = document.getElementById("allDataStatus");
  status.innerHTML = JSON.stringify(ctx.accounts);
}

function login() {
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const status = document.getElementById("loginStatus");
  let check = ctx.accounts.some(
    (item) => item.email === email.value && item.password === password.value
  );
  if (check) {
    status.innerHTML = "Login successful";
    email.value = "";
    password.value = "";
  } else {
    status.innerHTML = "Incorrect email or password. Please try again";
    email.value = "";
    password.value = "";
  }
}

function balance() {
  const email = document.getElementById("balanceEmail");
  const password = document.getElementById("balancePassword");
  const status = document.getElementById("balanceStatus");
  let check = ctx.accounts.some(
    (item) => item.email === email.value && item.password === password.value
  );
  if (check) {
    let activeUser = ctx.accounts.filter((item) => item.email === email.value);
    status.innerHTML =
      "Login successful. \n Your account balance is " + activeUser[0].balance;
    email.value = "";
    password.value = "";
  } else {
    status.innerHTML = "Incorrect email or password. Please try again";
    email.value = "";
    password.value = "";
  }
}

function deposit() {
  const email = document.getElementById("depositEmail");
  const password = document.getElementById("depositPassword");
  const status = document.getElementById("depositStatus");
  const deposit = document.getElementById("depositAmount");
  let check = ctx.accounts.some(
    (item) => item.email === email.value && item.password === password.value
  );
  if (check) {
    let activeUser = ctx.accounts.filter((item) => item.email === email.value);
    if (deposit.value > 0) {
      activeUser[0].balance = activeUser[0].balance + Number(deposit.value);
      status.innerHTML =
        "Login successful. Your account balance is " + activeUser[0].balance;
      email.value = "";
      password.value = "";
      deposit.value = "";
      setTimeout(() => (status.innerHTML = ""), 2000);
    } else {
      status.innerHTML = "Deposit amount must be greater than 0";
      deposit.value = "";
      setTimeout(() => (status.innerHTML = ""), 2000);
    }
  } else {
    status.innerHTML = "Incorrect email or password. Please try again";
    email.value = "";
    password.value = "";
    deposit.value = "";
    setTimeout(() => (status.innerHTML = ""), 2000);
  }
}

function withdraw() {
  const email = document.getElementById("withdrawEmail");
  const password = document.getElementById("withdrawPassword");
  const status = document.getElementById("withdrawStatus");
  const withdraw = document.getElementById("withdrawAmount");
  let check = ctx.accounts.some(
    (item) => item.email === email.value && item.password === password.value
  );
  if (check) {
    let activeUser = ctx.accounts.filter((item) => item.email === email.value);
    if (withdraw.value <= activeUser[0].balance && withdraw.value > 0) {
      activeUser[0].balance = activeUser[0].balance - Number(withdraw.value);
      status.innerHTML =
        "Login successful. Your account balance is " + activeUser[0].balance;
      email.value = "";
      password.value = "";
      withdraw.value = "";
      setTimeout(() => (status.innerHTML = ""), 2000);
    } else {
      status.innerHTML = "Unauthorized amount";
      withdraw.value = "";
      setTimeout(() => (status.innerHTML = ""), 2000);
    }
  } else {
    status.innerHTML = "Incorrect email or password. Please try again";
    email.value = "";
    password.value = "";
    withdraw.value = "";
    setTimeout(() => (status.innerHTML = ""), 2000);
  }
}
