const prompt = require('prompt-sync')({sigint: true});

const input = prompt("Masukkan bilangan genap: ");
const angka = console.log(Number(input));

if (input < 0) {
    console.log("Error: Tidak bisa input bilangan negatif" );
}
// Cek jika angka ganjil
if (input % 2 ) {
    console.log("Error: Tidak bisa input bilangan ganjil");
}
// Hitung akar pangkat dua jika bilangan genap
return Math.sqrt(Number(input));

console.log(angka);
