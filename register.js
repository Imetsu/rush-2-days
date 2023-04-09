"usestrict";
const btnLogin = document.querySelector(".login__btn");
const btnresgiter = document.querySelector(".welcome");
const btnctn = document.querySelector(".container");
const body = document.querySelector("body");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
let check = false;
btnresgiter.addEventListener("click", function () {
  if (check) {
    btnctn.style.opacity = 0;
    check = false;
  } else {
    btnctn.style.opacity = 1;
    check = true;
  }
});

const account1 = {
  owner: "tuandat@gmail.com",

  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "anhtuan@gmail.com",

  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "kimchaewon@gmail.com",
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "PhungLeMinh",

  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const dangky = document.querySelector(".dangky");
const pass = document.querySelector(".pass");
const submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  if (String(dangky.value).length < 6) {
    alert("Ten tai khoan khong");
  }
  alert("Dang ky thanh cong");
  dangky.value = "";
  pass.value = "";
});
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.owner === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    window.open("library1.html");
    // Update UI
  }
});
