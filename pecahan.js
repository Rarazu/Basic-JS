//number 3
let pecahan = [100000,50000,20000,5000,2000,1000,500,200,100]
let total = 3345700
let jmlUang =  0

for (let i = 0; i < pecahan.length; i++) {
    if (total >= pecahan[i]) {
        jmlUang = Math.floor( total / pecahan[i])
        total = total % pecahan[i]
        console.log(`Pecahan ${pecahan[i]}: ${jmlUang}`);
    }
}
