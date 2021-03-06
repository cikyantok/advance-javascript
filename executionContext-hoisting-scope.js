// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Farhan'

// creation phase pada Global Context (JS cek apakah ada var atau funct di dalam kodingan?)
// kalo ada dia akan membuat :
// nama var = undefined 
// nama function = fn()
// INI ADALAH KONSEP HOISTING -> seperti menggerek bendera ke atas
// selain itu, JS juga mendefinisikan :
// window = global object
// this = window

// execution phase

// ===================


// var nama = 'Farhan'
// var umur = 33

// console.log(sayHello());

// function sayHello() {
//     return `Hello, nama saya ${nama}, saya ${umur} tahun.`
// }

//kalo ketemu functiuon:
// function membuat Loccal Execution Context
// yg di dalamnya terdapat creation dan execution phase

// klao local execution context kita dapat akses :
// window
// arguments
// didalamnya ada hoisting juga yg local
// ================

//scope
// var nama = 'Farhan Yudhi Fatah'
// var username = 'masfar.id'

// function cetakURL() {
//     console.log(arguments); // wadoy masuk kesini kalo ga ada parameter yang nangkep
    
//     var instagramURL = 'http://instagram.com/'
//     return instagramURL + username
// }

// console.log(cetakURL('wadoy')); // scope

// ==============

// analogi exception local
// function a(){
//     console.log('ini a');
//     function b() {
//         console.log('ini b')
//         function c() {
//             console.log('ini c')
//         }
//         c()
//     }
//     b()
// }
// a()





// LATIHAN SOAL

function satu() {
    var nama = 'Shandika'
    console.log(nama);
}

function dua() {
    console.log(nama)
}

console.log(nama);
var nama = 'Erik'
satu()
dua('Dody')
console.log(nama);

// outputnya ?
// undefined
// shandika
// erik (karena tidak ditangkap)
// erik
