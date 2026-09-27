import Link from "next/link";

const Books = async () => {
  const response = await fetch(
    "http://localhost:3000/data/booksData.json"
  );

  const books = await response.json();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-500">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Books
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
          Discover your next favorite book from our carefully selected
          collection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: any) => (
          <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50 p-4">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                By {book.author}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {book.category}
                </span>

                <span className="text-sm font-semibold text-gray-700">
                  ⭐ {book.rating}
                </span>
              </div>

              <Link
                href={`/book/${book.bookId}`}
                className="mt-5 block w-full rounded-full bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;