"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Book Management Application - Week 6");
console.log("=====================================");
// Mulai pengujian di bawah ini
const bookManager_1 = require("./functions/bookManager");
// 1. Tambahkan beberapa buku
(0, bookManager_1.addBook)({
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    publicationYear: 2004
});
(0, bookManager_1.addBook)({
    title: "Personality Plus",
    author: "Florence Littauer",
    publicationYear: 2011
});
(0, bookManager_1.addBook)({
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publicationYear: 2014
});
(0, bookManager_1.addBook)({
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    publicationYear: 2007
});
// 2. Tampilkan semua buku
(0, bookManager_1.listBooks)();
// 3. Uji coba pencarian dengan parameter
(0, bookManager_1.searchBook)("Personality");
// 4. Uji coba pencarian tanpa parameter (akan menampilkan semua)
(0, bookManager_1.searchBook)();
// 5. Uji coba pencarian buku yang tidak ada
(0, bookManager_1.searchBook)("How to Win Friends and Influence People");
