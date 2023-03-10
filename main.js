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

function loadCurrencyRate() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
       console.log(this.responseText);
       const obj = JSON.parse(this.responseText);

       console.log(obj.data);
       // Expected output: 42
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
