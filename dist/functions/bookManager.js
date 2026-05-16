"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBook = exports.listBooks = exports.addBook = void 0;
const books_1 = require("../data/books");
/**
 * Menambahkan buku baru ke dalam array
 * Return type: void
 */
const addBook = (book) => {
    books_1.books.push(book);
    console.log(`Berhasil menambahkan buku: "${book.title}"`);
};
exports.addBook = addBook;
/**
 * Menampilkan semua buku yang ada di array
 * Return type: void
 */
const listBooks = () => {
    console.log("\n--- Daftar Koleksi Buku ---");
    if (books_1.books.length === 0) {
        console.log("Koleksi masih kosong.");
    }
    else {
        books_1.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} oleh ${book.author} (${book.publicationYear})`);
        });
    }
};
exports.listBooks = listBooks;
/**
 * Mencari buku berdasarkan judul (case-insensitive)
 * Menggunakan optional parameter 'title'
 * Return type: void
 */
const searchBook = (title) => {
    console.log(`\n--- Hasil Pencarian: ${title || "Semua Buku"} ---`);
    // Jika title tidak diberikan, tampilkan semua buku
    if (!title) {
        (0, exports.listBooks)();
        return;
    }
    const filteredBooks = books_1.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    if (filteredBooks.length > 0) {
        filteredBooks.forEach((book) => {
            console.log(`Ditemukan: ${book.title} - ${book.author} (${book.publicationYear})`);
        });
    }
    else {
        console.log(`Tidak ada buku dengan judul yang mengandung kata "${title}"`);
    }
};
exports.searchBook = searchBook;
