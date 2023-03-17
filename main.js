function recalculateCurrency() {
  var base = document.getElementById("base_currency").value;
  var rate = document.getElementById("currency_rate").value;
  
  console.log(base);
  console.log(rate);
  console.log(typeof Number(rate));
  console.log(typeof base);
  console.log(Number(base) * Number(rate));
 
  document.getElementById("to_currency").value = base * rate;
}

function loadRate(baseCurrency, toCurrency) {

  if (baseCurrency.value.length !=3 || toCurrency.value.length != 3)
  {
    return;
  }

  var currenciesRequest = new XMLHttpRequest();

  currenciesRequest.addEventListener("load", function () {
       console.log(this.responseText);
       const obj = JSON.parse(this.responseText);

       console.log(obj["data"]);
       console.log("data[0]= " + JSON.stringify(obj["data"][toCurrency.value]));

       document.getElementById("currency_rate").value = Number(obj["data"][toCurrency.value]);

  });

  currenciesRequest.open("GET", "https://api.freecurrencyapi.com/v1/latest?base_currency=" + baseCurrency.value + "&currencies=" + toCurrency.value);
  currenciesRequest.setRequestHeader("apikey", "kCE29RH8r5fuBVFbhsxO5uBiBYAA2q60rpCscZt7");
  currenciesRequest.send();
}

function loadCurrencyRate() {

  var currenciesRequest = new XMLHttpRequest();
  currenciesRequest.addEventListener("load", function () {
      // console.log(this.responseText);
      const obj = JSON.parse(this.responseText);
          
      var currencyKeys = Object.keys(obj.data);
      console.log(currencyKeys);
      let i = 0;
      var selectTo = document.getElementById("selectToCurrency");
      var selectFrom = document.getElementById("selectFromCurrency");

       while (i < currencyKeys.length) {
         console.log(currencyKeys[i]);
         var opt = currencyKeys[i];
         var el = document.createElement("option");
         var e2 = document.createElement("option");

         el.textContent = String(opt);
         el.value = String(opt);
         e2.textContent = String(opt);
         e2.value = String(opt);
         selectFrom.appendChild(el);
         selectTo.appendChild(e2);
         i++;
      }

      selectTo.addEventListener("input", function(e) {
      	console.log("selectTo = " + selectTo.value);
	loadRate(selectFrom, selectTo);
      });

      selectFrom.addEventListener("input", function(e) {
	console.log("selectFrom = " + selectFrom.value);
	loadRate(selectFrom, selectTo);
      });

  });

  

  currenciesRequest.open("GET", "https://api.freecurrencyapi.com/v1/currencies");
  currenciesRequest.setRequestHeader("apikey", "kCE29RH8r5fuBVFbhsxO5uBiBYAA2q60rpCscZt7");
  currenciesRequest.send();


  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
       console.log(this.responseText);
       const obj = JSON.parse(this.responseText);

       console.log(obj.data);
       console.log(obj.data.USD);

       document.getElementById("currency_rate").value = Number(obj.data.USD);

  });

  oReq.open("GET", "https://api.freecurrencyapi.com/v1/latest?base_currency=EUR&currencies=USD");
  oReq.setRequestHeader("apikey", "kCE29RH8r5fuBVFbhsxO5uBiBYAA2q60rpCscZt7");
  oReq.send();

  document.getElementById("base_currency").addEventListener("input", function(e) {
     recalculateCurrency();
  });
}
