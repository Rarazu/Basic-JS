// Tugas Basic in Javascript No. 1
let panjang = 30;
let lebar = 20.5;
let harga = 0;
let total = 0;

let luas = panjang * lebar;
harga = luas * 1500000;

let ppn = harga * 15/100;
total += ppn;

console.log(`Nominal yang harus dibayar = Rp${total}`);