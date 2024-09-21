function namaFungsi() {
    console.log("hello world");
}

// namaFungsi();

function sayHello(nama) {
    console.log("hello " +nama+ "!")
}

function kali(a, b) {
    hasilKali = a * b;
    console.log("hasil kali a*b = " +hasilKali)
}

module.exports = {namaFungsi, sayHello, kali}