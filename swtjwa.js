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

