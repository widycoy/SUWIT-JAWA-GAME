// Menangkap pilihan pemain
var p = prompt("pilih : gajah, semut,orang");

// Menangkap Pilihan Computer
// Membangkitkan bilangan Random
var comp = Math.random();

if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}
console.log(comp);

// Menentukan Rules
var hasil = "";

if (p == comp) {
  hasil = "seri";
} else if (p == "gajah") {
  hasil = comp == "orang" ? "menang" : "kalah";
} else if (p == "orang") {
  hasil = comp == "gajah" ? "kalah" : "menang";
} else if (p == "semut") {
  hasil = comp == "orang" ? "kalah" : "menang";
} else {
  hasil = "memasukan pilihan yang salah";
}


