import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid items-center gap-8 rounded-2xl bg-[#131C2E] px-8 py-9 text-white md:grid-cols-2 md:px-10">

        <div>
          <span className="mb-5 inline-block rounded-full bg-slate-700/80 px-4 py-2 text-xs text-gray-200">
            📚 Discover your next favorite book
          </span>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            <span className="block text-white">
              Books to freshen up
            </span>

            <span className="block text-emerald-400">
              your bookshelf
            </span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
            Explore a collection of amazing books and find something
            perfect for your next reading adventure.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#books"
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              Explore Books →
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={bannerImg}
            alt="Books collection"
            priority
            className="h-[250px] w-full max-w-[395px] rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;