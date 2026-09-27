"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  totalPages: number;
  rating: number;
  category: string;
  publisher: string;
  yearOfPublishing: number;
}

export default function ListedBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem("listed-books");

    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  const removeBook = (bookId: number) => {
    const updatedBooks = books.filter((book) => book.bookId !== bookId);

    setBooks(updatedBooks);
    localStorage.setItem("listed-books", JSON.stringify(updatedBooks));

    toast.error("Book removed from Listed Books!");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-2xl bg-[#F3F3F3] py-10 text-center">
          <h1 className="text-3xl font-bold text-[#131313] md:text-4xl">
            Listed Books
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Your favorite books are saved here.
          </p>
        </div>

        {books.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 py-20 text-center">
            <h2 className="text-2xl font-semibold text-[#131313]">
              No Listed Books
            </h2>

            <p className="mt-3 text-gray-500">
              Add books to your wishlist to see them here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-[#50B1C9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3ea0b8]"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {books.map((book) => (
              <div
                key={book.bookId}
                className="grid gap-6 rounded-2xl border border-gray-200 p-5 shadow-sm md:grid-cols-[180px_1fr] md:p-6"
              >
                <div className="flex items-center justify-center rounded-xl bg-[#F3F3F3] p-5">
                  <div className="relative h-[220px] w-[150px]">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      fill
                      className="rounded-md object-contain"
                      sizes="150px"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-[#131313]">
                    {book.bookName}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    By {book.author}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="mt-1 font-semibold text-[#131313]">
                        {book.category}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Pages</p>
                      <p className="mt-1 font-semibold text-[#131313]">
                        {book.totalPages}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Rating</p>
                      <p className="mt-1 font-semibold text-[#131313]">
                        ⭐ {book.rating}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">Published</p>
                      <p className="mt-1 font-semibold text-[#131313]">
                        {book.yearOfPublishing}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/book/${book.bookId}`}
                      className="rounded-lg border border-[#50B1C9] px-5 py-2.5 text-sm font-semibold text-[#50B1C9] transition hover:bg-[#50B1C9] hover:text-white"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => removeBook(book.bookId)}
                      className="rounded-lg border border-red-400 px-5 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}