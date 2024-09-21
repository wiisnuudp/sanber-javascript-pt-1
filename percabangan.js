const prompt = require('prompt-sync')({sigint: true});

const password = prompt('Enter password : ');
const validPassword = 'password'

//perbandingan
if (password === validPassword) {
    //jika benar
    console.log('selamat datang, bos')
} else {
    //jika salah
    console.log('password salah')
}

console.log('terima kasih sudah menggunakan alikasi kami')