let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];  

function randomCustomerNum (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let myCities = [];  

function City (cityName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer){
  this.cityName = cityName; 
  this.minHourlyCustomers = minHourlyCustomers; 
  this.maxHourlyCustomers = maxHourlyCustomers; 
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; 
  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = []; 
  this.totalCookiesPerDay = 0; 
  myCities.push(this); 
}

City.prototype.getCustomersPerHour = function (){
  for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    this.customersPerHour.push(currentHourCustomers);
  }
}

City.prototype.getCookiesPurchasedPerHour = function(){
  for (let i = 0; i < storeHours.length; i++){
    let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
    let resultB = Math.round(resultA); 
    this.cookiesPurchasedPerHour.push(resultB);
  }
}

City.prototype.getTotalCookiesPurchased = function (){
  for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
    this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
  }
}


// let boston = new City ('Boston', 5, 50, 20); 
// boston.getCustomersPerHour(); 
// boston.getCookiesPurchasedPerHour(); 
// boston.getTotalCookiesPurchased(); 
// console.log(boston); 
// console.log(myCities); 

let seattle = new City ('Seattle', 23, 65, 6.3); 
seattle.getCustomersPerHour(); 
seattle.getCookiesPurchasedPerHour(); 
seattle.getTotalCookiesPurchased(); 
console.log(seattle); 
console.log(myCities); 

let tokyo = new City ('Tokyo', 3, 24, 1.2); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
console.log(myCities); 

let dubai = new City ('Dubai', 11, 38, 3.7); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
console.log(myCities); 

let paris = new City ('Paris', 20, 38, 2.3); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
console.log(myCities); 

let lima = new City ('Lima', 2, 16, 4.6); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
console.log(myCities); 

function renderTableMain (){
  const parentElement = document.getElementById('sales-table'); 
  for (let i = 0; i < myCities.length; i++){
    let currentCity = myCities[i]; 
    let currentRow = document.createElement('tr');  
    currentRow.textContent = currentCity.cityName;
    parentElement.appendChild(currentRow); 
  }; 
  for (let j = 0; j < myCities.length; j++){
    let currentCity2 = myCities[j]; 
    for (let k = 0; k < currentCity2.cookiesPurchasedPerHour.length; k++){
      let currentDatum = document.createElement('td'); 
      currentDatum.textContent = currentCity2.cookiesPurchasedPerHour[k]; 
      parentElement.appendChild(currentDatum); 
    }
  }
} 

//questions: 
//1. get the data in each td 
//2. AC without the P for now? 

renderTableMain(); 

function renderTableHeader(){
  const parentElement = document.getElementById('sales-table');
  for (let i = 0; i < storeHours.length; i++){
    let currentTime = storeHours[i]; 

  }
}

//function for the table header row is by itself 
//function for the table footer row is by itself 
//function for tr (names of cities) is not by itself 
//function to render whole table will call the separate header row function 








//seattle

// let seattleInfo = {
//   cityName: 'Seattle', 
//   minHourlyCustomers: 23, 
//   maxHourlyCustomers: 65, 
//   avgCookiesPerCustomer: 6.3, 
//   customersPerHour: [],
//   cookiesPurchasedPerHour: [], 
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(23, 65);
//     this.customersPerHour.push(currentHourCustomers);
//     }
//   },
//   getCookiesPurchasedPerHour: function (){
//     for (let i = 0; i < storeHours.length; i++){
//       let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
//       let resultB = Math.round(resultA); 
//       this.cookiesPurchasedPerHour.push(resultB); 
//     }
//   },
//   getTotalCookiesPurchased: function(){
//     for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//       this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
//     }
//   },
//   render: function (){
//     let currentH1 = document.getElementById('seattle-hourly-sales'); 
//     currentH1.innerText = this.cityName; 
//     let h1Elem = document.createElement('h1'); 
//     h1Elem.textContent = this.cityName; 
//     let list = document.getElementById("seattle-list"); 
//     for (let i = 0; i < storeHours.length + 1; i++){
//       let li = document.createElement('li');
//       if (i === storeHours.length){
//         li.innerText = `Total: ${seattleInfo.totalCookiesPerDay} cookies`; 
//         list.appendChild(li); 
//       } else {
//       li.innerText = `${storeHours[i]}: ${seattleInfo.cookiesPurchasedPerHour[i]} cookies`;
//       list.appendChild(li); 
//       }
//     }
//   }
// }

// seattleInfo.getCustomersPerHour(); 
// seattleInfo.getCookiesPurchasedPerHour(); 
// seattleInfo.getTotalCookiesPurchased(); 
// console.log(seattleInfo); 
// seattleInfo.render();

// //tokyo

// let tokyoInfo = {
//   cityName: 'Tokyo', 
//   minHourlyCustomers: 3, 
//   maxHourlyCustomers: 24, 
//   avgCookiesPerCustomer: 1.2, 
//   customersPerHour: [],
//   cookiesPurchasedPerHour: [], 
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(3, 24);
//     this.customersPerHour.push(currentHourCustomers);
//     }
//   },
//   getCookiesPurchasedPerHour: function (){
//     for (let i = 0; i < storeHours.length; i++){
//       let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
//       let resultB = Math.round(resultA); 
//       this.cookiesPurchasedPerHour.push(resultB); 
//     }
//   },
//   getTotalCookiesPurchased: function(){
//     for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//       this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
//     }
//   },
//   render: function (){
//     let currentH1 = document.getElementById('tokyo-hourly-sales'); 
//     currentH1.innerText = this.cityName; 
//     let h1Elem = document.createElement('h1'); 
//     h1Elem.textContent = this.cityName; 
//     let list = document.getElementById("tokyo-list"); 
//     for (let i = 0; i < storeHours.length + 1; i++){
//       let li = document.createElement('li');
//       if (i === storeHours.length){
//         li.innerText = `Total: ${tokyoInfo.totalCookiesPerDay} cookies`; 
//         list.appendChild(li); 
//       } else {
//       li.innerText = `${storeHours[i]}: ${tokyoInfo.cookiesPurchasedPerHour[i]} cookies`;
//       list.appendChild(li); 
//       }
//     }
//   }
// }

// tokyoInfo.getCustomersPerHour(); 
// tokyoInfo.getCookiesPurchasedPerHour(); 
// tokyoInfo.getTotalCookiesPurchased(); 
// console.log(tokyoInfo); 
// tokyoInfo.render();

// //dubai

// let dubaiInfo = {
//   cityName: 'Dubai', 
//   minHourlyCustomers: 11, 
//   maxHourlyCustomers: 38, 
//   avgCookiesPerCustomer: 3.7, 
//   customersPerHour: [],
//   cookiesPurchasedPerHour: [], 
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(11, 38);
//     this.customersPerHour.push(currentHourCustomers);
//     }
//   },
//   getCookiesPurchasedPerHour: function (){
//     for (let i = 0; i < storeHours.length; i++){
//       let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
//       let resultB = Math.round(resultA); 
//       this.cookiesPurchasedPerHour.push(resultB); 
//     }
//   },
//   getTotalCookiesPurchased: function(){
//     for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//       this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
//     }
//   },
//   render: function (){
//     let currentH1 = document.getElementById('dubai-hourly-sales'); 
//     currentH1.innerText = this.cityName; 
//     let h1Elem = document.createElement('h1'); 
//     h1Elem.textContent = this.cityName; 
//     let list = document.getElementById("dubai-list"); 
//     for (let i = 0; i < storeHours.length + 1; i++){
//       let li = document.createElement('li');
//       if (i === storeHours.length){
//         li.innerText = `Total: ${dubaiInfo.totalCookiesPerDay} cookies`; 
//         list.appendChild(li); 
//       } else {
//       li.innerText = `${storeHours[i]}: ${dubaiInfo.cookiesPurchasedPerHour[i]} cookies`;
//       list.appendChild(li); 
//       }
//     }
//   }
// }

// dubaiInfo.getCustomersPerHour(); 
// dubaiInfo.getCookiesPurchasedPerHour(); 
// dubaiInfo.getTotalCookiesPurchased(); 
// console.log(dubaiInfo); 
// dubaiInfo.render();

// //paris

// let parisInfo = {
//   cityName: 'Paris', 
//   minHourlyCustomers: 20, 
//   maxHourlyCustomers: 38, 
//   avgCookiesPerCustomer: 2.3, 
//   customersPerHour: [],
//   cookiesPurchasedPerHour: [], 
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(20, 38);
//     this.customersPerHour.push(currentHourCustomers);
//     }
//   },
//   getCookiesPurchasedPerHour: function (){
//     for (let i = 0; i < storeHours.length; i++){
//       let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
//       let resultB = Math.round(resultA); 
//       this.cookiesPurchasedPerHour.push(resultB); 
//     }
//   },
//   getTotalCookiesPurchased: function(){
//     for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//       this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
//     }
//   },
//   render: function (){
//     let currentH1 = document.getElementById('paris-hourly-sales'); 
//     currentH1.innerText = this.cityName; 
//     let h1Elem = document.createElement('h1'); 
//     h1Elem.textContent = this.cityName; 
//     let list = document.getElementById("paris-list"); 
//     for (let i = 0; i < storeHours.length + 1; i++){
//       let li = document.createElement('li');
//       if (i === storeHours.length){
//         li.innerText = `Total: ${parisInfo.totalCookiesPerDay} cookies`; 
//         list.appendChild(li); 
//       } else {
//       li.innerText = `${storeHours[i]}: ${parisInfo.cookiesPurchasedPerHour[i]} cookies`;
//       list.appendChild(li); 
//       }
//     }
//   }
// }

// parisInfo.getCustomersPerHour(); 
// parisInfo.getCookiesPurchasedPerHour(); 
// parisInfo.getTotalCookiesPurchased(); 
// console.log(parisInfo); 
// parisInfo.render();

// //lima

// let limaInfo = {
//   cityName: 'Lima', 
//   minHourlyCustomers: 2, 
//   maxHourlyCustomers: 16, 
//   avgCookiesPerCustomer: 4.6, 
//   customersPerHour: [],
//   cookiesPurchasedPerHour: [], 
//   totalCookiesPerDay: 0,
//   getCustomersPerHour: function(){
//     for (let i = 0; i < storeHours.length; i++){
//     let currentHourCustomers = randomCustomerNum(2, 16);
//     this.customersPerHour.push(currentHourCustomers);
//     }
//   },
//   getCookiesPurchasedPerHour: function (){
//     for (let i = 0; i < storeHours.length; i++){
//       let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
//       let resultB = Math.round(resultA); 
//       this.cookiesPurchasedPerHour.push(resultB); 
//     }
//   },
//   getTotalCookiesPurchased: function(){
//     for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
//       this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
//     }
//   },
//   render: function (){
//     let currentH1 = document.getElementById('lima-hourly-sales'); 
//     currentH1.innerText = this.cityName; 
//     let h1Elem = document.createElement('h1'); 
//     h1Elem.textContent = this.cityName; 
//     let list = document.getElementById("lima-list"); 
//     for (let i = 0; i < storeHours.length + 1; i++){
//       let li = document.createElement('li');
//       if (i === storeHours.length){
//         li.innerText = `Total: ${limaInfo.totalCookiesPerDay} cookies`; 
//         list.appendChild(li); 
//       } else {
//       li.innerText = `${storeHours[i]}: ${limaInfo.cookiesPurchasedPerHour[i]} cookies`;
//       list.appendChild(li); 
//       }
//     }
//   }
// }

// limaInfo.getCustomersPerHour(); 
// limaInfo.getCookiesPurchasedPerHour(); 
// limaInfo.getTotalCookiesPurchased(); 
// console.log(limaInfo); 
// limaInfo.render();