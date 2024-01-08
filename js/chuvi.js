function chuVi(a, b) {
  return (a + b)*2;
}
function dienTich(a, b) {
  return (a * b);
}

var a = parseInt(prompt("Nhap so A: "));
var b = parseInt(prompt("Nhap so B: "));
var chu_vi = chuVi(a, b);
var dien_tich = dienTich(a,b);
document.write("dien tich = " + a + "*" + b + " = " + dien_tich +"<br>");
document.write("chu vi = " + (a + "+" + b)+"*"+2 + " = " + chu_vi);
