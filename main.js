function calculateTriangleArea() {
  var base = document.getElementById("base_triangle").value;
  var height = document.getElementById("height_triangle").value;
  document.getElementById("area_triangle").value = 0.5 * base * height;
}
