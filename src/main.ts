// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

import { addBook, listBooks, searchBook } from "./functions/bookManager";

// 1. Tambahkan beberapa buku
addBook({
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    publicationYear: 2004
});

addBook({
    title: "Personality Plus",
    author: "Florence Littauer",
    publicationYear: 2011
});

addBook({
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publicationYear: 2014
});

addBook({
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    publicationYear: 2007
});

// 2. Tampilkan semua buku
listBooks();

// 3. Uji coba pencarian dengan parameter
searchBook("Personality");

// 4. Uji coba pencarian tanpa parameter (akan menampilkan semua)
searchBook();

// 5. Uji coba pencarian buku yang tidak ada
searchBook("Personality Puzzles");