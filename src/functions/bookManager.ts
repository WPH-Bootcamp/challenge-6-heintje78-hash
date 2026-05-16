// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from "../types";
import { books } from "../data/books";

/**
 * Menambahkan buku baru ke dalam array
 * Return type: void
 */
export const addBook = (book: Book): void => {
    books.push(book);
    console.log(`Berhasil menambahkan buku: "${book.title}"`);
};

/**
 * Menampilkan semua buku yang ada di array
 * Return type: void
 */
export const listBooks = (): void => {
    console.log("\n--- Daftar Koleksi Buku ---");
    if (books.length === 0) {
        console.log("Koleksi masih kosong.");
    } else {
        books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} oleh ${book.author} (${book.publicationYear})`);
        });
    }
};

/**
 * Mencari buku berdasarkan judul (case-insensitive)
 * Menggunakan optional parameter 'title'
 * Return type: void
 */
export const searchBook = (title?: string): void => {
    console.log(`\n--- Hasil Pencarian: ${title || "Semua Buku"} ---`);
    
    // Jika title tidak diberikan, tampilkan semua buku
    if (!title) {
        listBooks();
        return;
    }

    const filteredBooks = books.filter((book) => 
        book.title.toLowerCase().includes(title.toLowerCase())
    );

    if (filteredBooks.length > 0) {
        filteredBooks.forEach((book) => {
            console.log(`Ditemukan: ${book.title} - ${book.author} (${book.publicationYear})`);
        });
    } else {
        console.log(`Tidak ada buku dengan judul yang mengandung kata "${title}"`);
    }
};