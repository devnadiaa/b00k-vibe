"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import booksData from "../../../../public/data/booksData.json";

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

export default function BookDetails() {
  const params = useParams();
  const id = Number(params.id);

  const books = booksData as Book[];
  const book = books.find((item) => item.bookId === id);

  const [isListed, setIsListed] = useState(false);

  useEffect(() => {
    if (!book) {
      return;
    }

    const savedBooks = localStorage.getItem("listed-books");

    if (savedBooks) {
      const listedBooks: Book[] = JSON.parse(savedBooks);

      const alreadyListed = listedBooks.some(
        (item) => item.bookId === book.bookId
      );

      setIsListed(alreadyListed);
    }
  }, [book]);

  if (!book) {
    notFound();
  }

  const handleWishlist = () => {
    const savedBooks = localStorage.getItem("listed-books");

    const listedBooks: Book[] = savedBooks
      ? JSON.parse(savedBooks)
      : [];

    const alreadyListed = listedBooks.some(
      (item) => item.bookId === book.bookId
    );

    if (alreadyListed) {
      toast.info("Book is already in your Listed Books!");
      return;
    }

    const updatedBooks = [...listedBooks, book];

    localStorage.setItem("listed-books", JSON.stringify(updatedBooks));
    setIsListed(true);

    toast.success("Book added to Listed Books!");
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 font-sans text-[#131313] md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-block rounded-lg border border-gray-300 px-5 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
        >
          ← Back to Books
        </Link>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-[#F3F3F3] p-12">
            <div className="relative h-[480px] w-[320px]">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="rounded-sm object-contain shadow-md"
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="mb-2 text-3xl font-bold text-[#131313] md:text-4xl">
              {book.bookName}
            </h1>

            <p className="mb-4 text-base font-medium text-[#131313] opacity-80">
              By : {book.author}
            </p>

            <hr className="mb-4 border-[#131313]/10" />

            <p className="mb-4 font-medium text-[#131313] opacity-80">
              {book.category}
            </p>

            <hr className="mb-4 border-[#131313]/10" />

            <p className="mb-6 text-sm leading-relaxed text-[#131313] opacity-70">
              <span className="font-bold text-[#131313]">Review : </span>
              {book.review}
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mr-2 text-sm font-bold text-[#131313]">
                Tag
              </span>

              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#23BE0A]/5 px-3 py-1 text-xs font-semibold text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <hr className="mb-6 border-[#131313]/10" />

            <div className="mb-8 grid grid-cols-[160px_1fr] gap-y-3 text-sm">
              <span className="text-[#131313] opacity-70">
                Number of Pages:
              </span>
              <span className="font-bold text-[#131313]">
                {book.totalPages}
              </span>

              <span className="text-[#131313] opacity-70">
                Publisher:
              </span>
              <span className="font-bold text-[#131313]">
                {book.publisher}
              </span>

              <span className="text-[#131313] opacity-70">
                Year of Publishing:
              </span>
              <span className="font-bold text-[#131313]">
                {book.yearOfPublishing}
              </span>

              <span className="text-[#131313] opacity-70">
                Rating:
              </span>
              <span className="font-bold text-[#131313]">
                {book.rating}
              </span>
            </div>

            <div className="flex space-x-4">
              <button className="rounded-lg border border-[#131313]/20 px-7 py-3 text-sm font-semibold text-[#131313] transition-colors hover:bg-gray-50">
                Read
              </button>

              <button
                onClick={handleWishlist}
                disabled={isListed}
                className={`rounded-lg px-7 py-3 text-sm font-semibold text-white transition-colors ${
                  isListed
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-[#50B1C9] hover:bg-[#3ea0b8]"
                }`}
              >
                {isListed ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}