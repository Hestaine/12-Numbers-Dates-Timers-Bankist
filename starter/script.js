'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-05-29T17:01:17.194Z',
    '2024-05-31T23:36:17.929Z',
    '2024-06-02T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-05-26T18:49:59.371Z',
    '2024-06-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Rengoku',
  movements: [8000, 1400, -50, -790, -2210, -900, 9500, -30],
  interestRate: 1.2,
  pin: 3215,
  movementsDates: [
    '2023-01-01T13:15:33.035Z',
    '2023-01-30T09:48:16.867Z',
    '2023-02-25T06:04:23.907Z',
    '2024-03-25T14:18:46.235Z',
    '2024-03-05T16:33:06.386Z',
    '2024-03-10T14:43:26.374Z',
    '2024-04-26T18:49:59.374z',
    '2023-04-01T13:15:33.035Z',
    '2023-04-30T09:48:16.867Z',
    '2023-05-05T06:04:23.907Z',
    '2024-05-15T14:18:46.235Z',
    '2024-05-25T16:33:06.386Z',
    '2024-06-20T14:43:26.374Z',
    '2024-06-21T18:49:59.371Z',
    '2024-06-22T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Meliodas ',
  movements: [8000, 1400, -50, -790, -2210, -900, 9500, -30],
  interestRate: 1.2,
  pin: 1234,
  movementsDates: [
    '2023-01-01T13:15:33.035Z',
    '2023-01-30T09:48:16.867Z',
    '2023-02-25T06:04:23.907Z',
    '2024-03-25T14:18:46.235Z',
    '2024-03-05T16:33:06.386Z',
    '2024-03-10T14:43:26.374Z',
    '2024-04-26T18:49:59.374z',
    '2023-04-01T13:15:33.035Z',
    '2023-04-30T09:48:16.867Z',
    '2023-05-25T06:04:23.907Z',
    '2024-05-25T14:18:46.235Z',
    '2024-05-05T16:33:06.386Z',
    '2024-06-20T14:43:26.374Z',
    '2024-06-23T18:49:59.371Z',
    '2024-06-21T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'Ariff Hestaine ',
  movements: [8000000000, 1400000000, -50, -79, -221, -90, 9500000000000, -30],
  interestRate: 1.2,
  pin: 6060,
  movementsDates: [
    '2023-01-01T13:15:33.035Z',
    '2023-01-30T09:48:16.867Z',
    '2023-02-25T06:04:23.907Z',
    '2024-03-25T14:18:46.235Z',
    '2024-03-05T16:33:06.386Z',
    '2024-03-10T14:43:26.374Z',
    '2024-04-26T18:49:59.374z',
    '2023-04-01T13:15:33.035Z',
    '2023-04-30T09:48:16.867Z',
    '2023-05-25T06:04:23.907Z',
    '2024-05-25T14:18:46.235Z',
    '2024-05-05T16:33:06.386Z',
    '2024-06-20T14:43:26.374Z',
    '2024-06-23T18:49:59.371Z',
    '2024-06-21T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcdaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  // Set time to 5 minutes
  let time = 120;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    // Decrease by 1s
    time--;
  };

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

const resetTimer = function () {
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Experimenting API

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Start/reser Timer
    resetTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Reset Timer
    resetTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // Reset Timer
  resetTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

/////////////////////////////////////////////////
// Convertiong and Checing Numbers

console.log(23 === 23.0);

// Base 10, 0 - 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base, 2 0 - 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log('------ The parseInt method ------');
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log('------ The parseFloat method ------');
console.log(Number.parseFloat('2.5rem', 10));
console.log(Number.parseInt('2.5rem', 10));

// console.log(parseFloat('2.5rem', 10));

// isNaN, check if value is NaN
console.log('------ The isNaN method ------');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// isFinite, chechk if value is number
console.log('------ The isFinite method ------');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log('------ The isInteger method ------');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// Square root, or cube root
console.log('------ The sqrt: sqare root method ------');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Maximum value
console.log('------ The max method ------');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23[x', 11, 2));

// min value
console.log('------ The min method ------');
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23[x', 11, 2));

// constanst = Math.pi
console.log('------ Constant: pi ------');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// random and trunc
console.log('------ The random method ------');
console.log(Math.trunc(Math.random() * 6) + 1);

console.log('Using a funtion to produce a random number between max and min');
const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));
console.log(randomInt(5, 10));

// Rounding integers
console.log('------ The round method ------');
console.log(Math.round(23.3));
console.log(Math.round('23.9'));

console.log('------ The ciel/ceiling method ------');
console.log(Math.ceil(23.3));
console.log(Math.ceil('23.9'));

console.log('------ The floor method ------');
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log('------ The trunc method ------');
console.log(Math.trunc(23.3));
console.log(Math.trunc('23.9'));

console.log('------ Diff: trunc and floor ------');
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log('------ The toFixed method ------');
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Reminder operator
console.log('------ The reminder operator ------');
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log('5 = 2 * 2 + 1');
console.log('\n');

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2
console.log('8 = 2 * 3 + 2');
console.log('\n');

console.log(6 % 2);
console.log(6 / 2);
console.log('\n');

console.log(7 % 2);
console.log(7 / 2);
console.log('\n');

const isEvenOdd = n => (n % 2 === 0 ? 'Even' : 'Odd');
console.log(isEvenOdd(8));
console.log(isEvenOdd(23));
console.log(isEvenOdd(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'Orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
// nth time

// Max number unit
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// BigInt
console.log(45444526431568754316573498653218653216596n);
console.log(BigInt(4544452643156875));

// Operations
console.log(10000n + 10000n);
console.log(3628637263372693726354676468448589n * 10000000n);

const huge = 202895221454264123654145554n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions of BigInt
console.log('Exception of BigInt: Logical Operators');
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);
console.log(20n == '20');
console.log('\n');

console.log('Exception of BigInt: String concatination');
console.log(huge + ' is Really big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
/////////////////////////////////////////////
// Dates and time

// Create a date
const now = new Date();
console.log(now);
console.log('\n');

console.log(new Date('May 29 2024 17:36:48'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log('\n');

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log('\n');

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

////////////////////////////////////////////
// Operations with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcdaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  
  const myBirth = new Date('nov 11 2008');
  
  const days1 = calcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
  console.log(days1);
  
  ///////////////////////////////////////////
  // Internationalizing Numbers (intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

///////////////////////////////////////////
// Timers

// SetTimeout
console.log('Set Timeout function');
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// SetInterval
console.log('Set Interval function');
setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
*/
