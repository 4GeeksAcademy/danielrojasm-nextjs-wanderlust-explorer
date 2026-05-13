"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const featuredDestinations = [
  {
    city: "Santorini",
    country: "Greece",
    imageUrl: "https://picsum.photos/seed/santorini-destination/1400/900",
  },
  {
    city: "Kyoto",
    country: "Japan",
    imageUrl: "https://picsum.photos/seed/kyoto-destination/1400/900",
  },
  {
    city: "Banff",
    country: "Canada",
    imageUrl: "https://picsum.photos/seed/banff-destination/1400/900",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    imageUrl: "https://picsum.photos/seed/marrakech-destination/1400/900",
  },
  {
    city: "Bali",
    country: "Indonesia",
    imageUrl: "https://picsum.photos/seed/bali-destination/1400/900",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % featuredDestinations.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const current = featuredDestinations[activeSlide];

  return (
    <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-[1fr_1.15fr] lg:p-8">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs uppercase tracking-[0.18em] text-slate-700">
          Curated travel experiences
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight text-slate-900 sm:text-6xl">
          Discover your next unforgettable journey
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-700">
          Browse 100 handpicked plans, filter by category and destination, and keep your favorite
          adventures one tap away.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/experiences"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-slate-700"
          >
            Explore experiences
          </Link>
          <Link
            href="/favorites"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
          >
            Go to favorites
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
          <img
            src={current.imageUrl}
            alt={`${current.city}, ${current.country}`}
            className="h-[360px] w-full object-cover sm:h-[440px]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Featured destination</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-3xl leading-none">
              {current.city}
            </p>
            <p className="mt-2 text-sm text-slate-100">{current.country}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          {featuredDestinations.map((destination, index) => {
            const isActive = index === activeSlide;

            return (
              <button
                key={`${destination.city}-${destination.country}`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {destination.city}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
