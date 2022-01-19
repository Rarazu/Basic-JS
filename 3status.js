// Tugas Basic in Javascript No. 3
tinggi = 1.7 //diubah meter
berat = 90

bmi = berat / (tinggi*tinggi)
console.log('BMI Rhodey = ' +bmi);

if (bmi < 18.5) {
    console.log('Status Berat Badan : Kekurangan berat badan');
}
if (bmi >= 18,5 && bmi <= 24.9) {
    console.log('Status Berat Badan : Normal(ideal)');
}
if (bmi >= 25.0 && bmi <= 29.9) {
    console.log('Status Berat Badan : Kelebihan berat badan');
}
if (bmi > 30) {
    console.log('Status Berat Badan : Obesitas');
}
