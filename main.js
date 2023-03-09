function calculateTriangleArea() {
  var base = document.getElementById("base_currency").value;
  var rate = document.getElementById("currency_rate").value;
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () { console.log(this.responseText); });
  oReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
  oReq.setRequestHeader("apikey", "kCE29RH8r5fuBVFbhsxO5uBiBYAA2q60rpCscZt7");
  oReq.setRequestHeader("base_currency", "EUR");
  oReq.setRequestHeader("currencies", "USD");
  oReq.send();

  document.getElementById("to_currency").value = base * rate;
}
