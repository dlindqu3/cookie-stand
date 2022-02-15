let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];  

function randomCustomerNum (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

//seattle

let seattleInfo = {
  cityName: 'Seattle', 
  minHourlyCustomers: 23, 
  maxHourlyCustomers: 65, 
  avgCookiesPerCustomer: 6.3, 
  customersPerHour: [],
  cookiesPurchasedPerHour: [], 
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(23, 65);
    this.customersPerHour.push(currentHourCustomers);
    }
  },
  getCookiesPurchasedPerHour: function (){
    for (let i = 0; i < storeHours.length; i++){
      let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
      let resultB = Math.round(resultA); 
      this.cookiesPurchasedPerHour.push(resultB); 
    }
  },
  getTotalCookiesPurchased: function(){
    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
    }
  },
  render: function (){
    let currentH1 = document.getElementById('seattle-hourly-sales'); 
    currentH1.innerText = this.cityName; 
    let h1Elem = document.createElement('h1'); 
    h1Elem.textContent = this.cityName; 
    let list = document.getElementById("seattle-list"); 
    for (let i = 0; i < storeHours.length + 1; i++){
      let li = document.createElement('li');
      if (i === storeHours.length){
        li.innerText = `Total: ${seattleInfo.totalCookiesPerDay} cookies`; 
        list.appendChild(li); 
      } else {
      li.innerText = `${storeHours[i]}: ${seattleInfo.cookiesPurchasedPerHour[i]} cookies`;
      list.appendChild(li); 
      }
    }
  }
}

seattleInfo.getCustomersPerHour(); 
seattleInfo.getCookiesPurchasedPerHour(); 
seattleInfo.getTotalCookiesPurchased(); 
console.log(seattleInfo); 
seattleInfo.render();

//tokyo

let tokyoInfo = {
  cityName: 'Tokyo', 
  minHourlyCustomers: 3, 
  maxHourlyCustomers: 24, 
  avgCookiesPerCustomer: 1.2, 
  customersPerHour: [],
  cookiesPurchasedPerHour: [], 
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(3, 24);
    this.customersPerHour.push(currentHourCustomers);
    }
  },
  getCookiesPurchasedPerHour: function (){
    for (let i = 0; i < storeHours.length; i++){
      let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
      let resultB = Math.round(resultA); 
      this.cookiesPurchasedPerHour.push(resultB); 
    }
  },
  getTotalCookiesPurchased: function(){
    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
    }
  },
  render: function (){
    let currentH1 = document.getElementById('tokyo-hourly-sales'); 
    currentH1.innerText = this.cityName; 
    let h1Elem = document.createElement('h1'); 
    h1Elem.textContent = this.cityName; 
    let list = document.getElementById("tokyo-list"); 
    for (let i = 0; i < storeHours.length + 1; i++){
      let li = document.createElement('li');
      if (i === storeHours.length){
        li.innerText = `Total: ${tokyoInfo.totalCookiesPerDay} cookies`; 
        list.appendChild(li); 
      } else {
      li.innerText = `${storeHours[i]}: ${tokyoInfo.cookiesPurchasedPerHour[i]} cookies`;
      list.appendChild(li); 
      }
    }
  }
}

tokyoInfo.getCustomersPerHour(); 
tokyoInfo.getCookiesPurchasedPerHour(); 
tokyoInfo.getTotalCookiesPurchased(); 
console.log(tokyoInfo); 
tokyoInfo.render();

//dubai

let dubaiInfo = {
  cityName: 'Dubai', 
  minHourlyCustomers: 11, 
  maxHourlyCustomers: 38, 
  avgCookiesPerCustomer: 3.7, 
  customersPerHour: [],
  cookiesPurchasedPerHour: [], 
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(11, 38);
    this.customersPerHour.push(currentHourCustomers);
    }
  },
  getCookiesPurchasedPerHour: function (){
    for (let i = 0; i < storeHours.length; i++){
      let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
      let resultB = Math.round(resultA); 
      this.cookiesPurchasedPerHour.push(resultB); 
    }
  },
  getTotalCookiesPurchased: function(){
    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
    }
  },
  render: function (){
    let currentH1 = document.getElementById('dubai-hourly-sales'); 
    currentH1.innerText = this.cityName; 
    let h1Elem = document.createElement('h1'); 
    h1Elem.textContent = this.cityName; 
    let list = document.getElementById("dubai-list"); 
    for (let i = 0; i < storeHours.length + 1; i++){
      let li = document.createElement('li');
      if (i === storeHours.length){
        li.innerText = `Total: ${dubaiInfo.totalCookiesPerDay} cookies`; 
        list.appendChild(li); 
      } else {
      li.innerText = `${storeHours[i]}: ${dubaiInfo.cookiesPurchasedPerHour[i]} cookies`;
      list.appendChild(li); 
      }
    }
  }
}

dubaiInfo.getCustomersPerHour(); 
dubaiInfo.getCookiesPurchasedPerHour(); 
dubaiInfo.getTotalCookiesPurchased(); 
console.log(dubaiInfo); 
dubaiInfo.render();

//paris

let parisInfo = {
  cityName: 'Paris', 
  minHourlyCustomers: 20, 
  maxHourlyCustomers: 38, 
  avgCookiesPerCustomer: 2.3, 
  customersPerHour: [],
  cookiesPurchasedPerHour: [], 
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(20, 38);
    this.customersPerHour.push(currentHourCustomers);
    }
  },
  getCookiesPurchasedPerHour: function (){
    for (let i = 0; i < storeHours.length; i++){
      let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
      let resultB = Math.round(resultA); 
      this.cookiesPurchasedPerHour.push(resultB); 
    }
  },
  getTotalCookiesPurchased: function(){
    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
    }
  },
  render: function (){
    let currentH1 = document.getElementById('paris-hourly-sales'); 
    currentH1.innerText = this.cityName; 
    let h1Elem = document.createElement('h1'); 
    h1Elem.textContent = this.cityName; 
    let list = document.getElementById("paris-list"); 
    for (let i = 0; i < storeHours.length + 1; i++){
      let li = document.createElement('li');
      if (i === storeHours.length){
        li.innerText = `Total: ${parisInfo.totalCookiesPerDay} cookies`; 
        list.appendChild(li); 
      } else {
      li.innerText = `${storeHours[i]}: ${parisInfo.cookiesPurchasedPerHour[i]} cookies`;
      list.appendChild(li); 
      }
    }
  }
}

parisInfo.getCustomersPerHour(); 
parisInfo.getCookiesPurchasedPerHour(); 
parisInfo.getTotalCookiesPurchased(); 
console.log(parisInfo); 
parisInfo.render();

//lima

let limaInfo = {
  cityName: 'Lima', 
  minHourlyCustomers: 2, 
  maxHourlyCustomers: 16, 
  avgCookiesPerCustomer: 4.6, 
  customersPerHour: [],
  cookiesPurchasedPerHour: [], 
  totalCookiesPerDay: 0,
  getCustomersPerHour: function(){
    for (let i = 0; i < storeHours.length; i++){
    let currentHourCustomers = randomCustomerNum(2, 16);
    this.customersPerHour.push(currentHourCustomers);
    }
  },
  getCookiesPurchasedPerHour: function (){
    for (let i = 0; i < storeHours.length; i++){
      let resultA = this.avgCookiesPerCustomer * this.customersPerHour[i]; 
      let resultB = Math.round(resultA); 
      this.cookiesPurchasedPerHour.push(resultB); 
    }
  },
  getTotalCookiesPurchased: function(){
    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++){
      this.totalCookiesPerDay += this.cookiesPurchasedPerHour[i]; 
    }
  },
  render: function (){
    let currentH1 = document.getElementById('lima-hourly-sales'); 
    currentH1.innerText = this.cityName; 
    let h1Elem = document.createElement('h1'); 
    h1Elem.textContent = this.cityName; 
    let list = document.getElementById("lima-list"); 
    for (let i = 0; i < storeHours.length + 1; i++){
      let li = document.createElement('li');
      if (i === storeHours.length){
        li.innerText = `Total: ${limaInfo.totalCookiesPerDay} cookies`; 
        list.appendChild(li); 
      } else {
      li.innerText = `${storeHours[i]}: ${limaInfo.cookiesPurchasedPerHour[i]} cookies`;
      list.appendChild(li); 
      }
    }
  }
}

limaInfo.getCustomersPerHour(); 
limaInfo.getCookiesPurchasedPerHour(); 
limaInfo.getTotalCookiesPurchased(); 
console.log(limaInfo); 
limaInfo.render();