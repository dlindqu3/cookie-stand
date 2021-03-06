'use strict'; 

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

//Wednesday: 
//1. finish lab 07: add "daily location total" sum column at right of table 



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
// console.log(myCities); 

let tokyo = new City ('Tokyo', 3, 24, 1.2); 
tokyo.getCustomersPerHour(); 
tokyo.getCookiesPurchasedPerHour(); 
tokyo.getTotalCookiesPurchased(); 
console.log(tokyo); 
// console.log(myCities); 

let dubai = new City ('Dubai', 11, 38, 3.7); 
dubai.getCustomersPerHour(); 
dubai.getCookiesPurchasedPerHour(); 
dubai.getTotalCookiesPurchased(); 
console.log(dubai); 
// console.log(myCities); 

let paris = new City ('Paris', 20, 38, 2.3); 
paris.getCustomersPerHour(); 
paris.getCookiesPurchasedPerHour(); 
paris.getTotalCookiesPurchased(); 
console.log(paris); 
// console.log(myCities); 

let lima = new City ('Lima', 2, 16, 4.6); 
lima.getCustomersPerHour(); 
lima.getCookiesPurchasedPerHour(); 
lima.getTotalCookiesPurchased(); 
console.log(lima); 
console.log(myCities); 

const parentElement = document.getElementById('sales-table'); 

function renderTableMain (){
  for (let i = 0; i < myCities.length; i++){
    let currentCity = myCities[i]; 
    let currentRow = document.createElement('tr');  
    let tableData = document.createElement('td'); 
    tableData.textContent = currentCity.cityName;
    parentElement.appendChild(currentRow); 
    currentRow.appendChild(tableData); 


    for (let j = 0; j < currentCity.cookiesPurchasedPerHour.length ; j++){
      let currentDatum = currentCity.cookiesPurchasedPerHour[j];
      let currentDatumCell = document.createElement('td'); 
      currentDatumCell.textContent = currentDatum; 
      currentRow.appendChild(currentDatumCell); 
    }
    // for (let k = 0; k < myCities.length; k++){
      let currentTotal = document.createElement('td');
      currentTotal.textContent = myCities[i].totalCookiesPerDay;
      currentRow.appendChild(currentTotal);
    // }
  }
} 


function renderTableHeader(){
  let tableHeading = document.createElement('tr');
  let cityHeading = document.createElement('th');
  parentElement.appendChild(tableHeading); 
  tableHeading.appendChild(cityHeading); 
  cityHeading.textContent = 'City Names'; 
  for (let i = 0; i < storeHours.length; i++){
    let currentTime = storeHours[i]; 
    let currentTableHeader = document.createElement('th'); 
    currentTableHeader.textContent = currentTime; 
    tableHeading.appendChild(currentTableHeader); 
  }
  //Daily Location Total
  let dailyLocTot = document.createElement('th'); 
  tableHeading.appendChild(dailyLocTot); 
  dailyLocTot.textContent = 'Daily Location Total'; 
}

let myFooterRow = document.createElement('tr'); 


function renderTableFooter(){
  let grandTotal = 0; 
  

  parentElement.appendChild(myFooterRow); 
  let hourlyTotals = document.createElement('td');
  hourlyTotals.textContent = 'Hourly Totals'; 
  myFooterRow.appendChild(hourlyTotals); 

  
  for (let i = 0; i < storeHours.length; i++){

    let total = 0; 

    for (let m = 0; m < myCities.length; m++){
      let currentCity = myCities[m]; 
      console.log(currentCity); 
      total += currentCity.cookiesPurchasedPerHour[i]; 
      grandTotal += total; 
    }
    let currentHourTotalCell = document.createElement('td'); 
      currentHourTotalCell.textContent = total; 
      myFooterRow.appendChild(currentHourTotalCell); 
  }
  let grandTotalCell = document.createElement('td'); 
      grandTotalCell.textContent = grandTotal; 
      myFooterRow.appendChild(grandTotalCell); 
}


renderTableHeader(); 
renderTableMain(); 
renderTableFooter(); 

const addStoreForm = document.getElementById('addStoreForm');

function handleSubmit(event){
  event.preventDefault(); 

    let cityName = event.target.cityName.value; 
    let minHourlyCustomers = event.target.minHourlyCustomers.value;
    let maxHourlyCustomers = event.target.maxHourlyCustomers.value;
    let avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value; 

    const newCity = new City(cityName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);
    newCity.getCustomersPerHour(); 
    newCity.getCookiesPurchasedPerHour(); 
    newCity.getTotalCookiesPurchased();
     
    //table id is "sales-table"; the table is saved as a constant parentElement

    let newRow = document.createElement('tr');
    let tableData = document.createElement('td');
    tableData.textContent = newCity.cityName;
    parentElement.appendChild(newRow); 
    newRow.appendChild(tableData); 

    for (let j = 0; j < newCity.cookiesPurchasedPerHour.length ; j++){
      let currentDatum = newCity.cookiesPurchasedPerHour[j];
      let currentDatumCell = document.createElement('td'); 
      currentDatumCell.textContent = currentDatum; 
      newRow.appendChild(currentDatumCell); 
    }

      let currentTotal = document.createElement('td');
      currentTotal.textContent = newCity.totalCookiesPerDay;
      newRow.appendChild(currentTotal);

    parentElement.appendChild(newRow); 

    addStoreForm.reset(); 
  
}

addStoreForm.addEventListener('submit', handleSubmit); 

//Friday: 
//1. add an hourly total row at the bottom of the table 
//2. update CSS (see 10b instructions)


///asdfasasdf

//function for the table header row is by itself 
//function for the table footer row is by itself 
//function for tr (names of cities) is in TableMain 









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