// number 2
let harga = [3000, 10000, 4500, 5000]
let jumlah =[20, 8, 10, 5]
let total = 0

for (let i = 0; i < harga.length; i++) {
    total += harga[i] * jumlah[i]
}

let ppn = total * 10/100
total += ppn
console.log(`Total Belanja = ${total}`);