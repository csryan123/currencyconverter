function calculateTriangleArea() {
  var base = document.getElementById("base_currency").value;
  var rate = document.getElementById("currency_rate").value;
  document.getElementById("to_currency").value = base * rate;
}
