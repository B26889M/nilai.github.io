let Grade = parseFloat(prompt('Tolong Masukan Nilai Anda'));

if (Grade <= 0 || Grade > 99){
    document.write(`Maaf, yang anda masukan salah. Silakan coba lagi`)
}else if(Grade <= 65){
    document.write(`Selamat, anda mendapatkan nilai F-`)
}else if(Grade <= 75){
    document.write(`Selamat, anda mendapatkan nilai F`)
}else if(Grade <= 80){
    document.write(`Selamat, anda mendapatkan nilai E`)
}else if(Grade <= 85){
    document.write(`Selamat, anda mendapatkan nilai D`)
}else if(Grade <= 90){
    document.write(`Selamat, anda mendapatkan nilai C`)
}else if(Grade <= 95){
    document.write(`Selamat, anda mendapatkan nilai B`)
}else if(Grade <= 99){
    document.write(`Selamat, anda mendapatkan nilai A`)
}