"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function ProfilePage() {
	const { favoriteIds } = useFavorites();

	return (
		<section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
			<article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
				<p className="text-sm uppercase tracking-[0.16em] text-slate-500">Traveler Profile</p>
				<h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-slate-900">
					Daniel Rojas
				</h1>
				<p className="mt-4 max-w-xl leading-7 text-slate-700">
					Digital creator and curious explorer. Loves discovering local food, sunrise hikes,
					and cultural neighborhoods that feel truly alive.
				</p>

				<div className="mt-8 grid gap-3 sm:grid-cols-3">
					<div className="rounded-2xl bg-slate-100 p-4">
						<p className="text-xs uppercase text-slate-500">Trips this year</p>
						<p className="mt-1 text-2xl font-bold text-slate-900">8</p>
					</div>
					<div className="rounded-2xl bg-slate-100 p-4">
						<p className="text-xs uppercase text-slate-500">Countries visited</p>
						<p className="mt-1 text-2xl font-bold text-slate-900">24</p>
					</div>
					<div className="rounded-2xl bg-slate-100 p-4">
						<p className="text-xs uppercase text-slate-500">Favorite style</p>
						<p className="mt-1 text-2xl font-bold text-slate-900">Culture</p>
					</div>
				</div>
			</article>

			<aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-lg">
				<p className="text-sm uppercase tracking-[0.16em] text-emerald-700">Favorites Summary</p>
				<p className="mt-4 font-[family-name:var(--font-display)] text-6xl text-emerald-900">
					{favoriteIds.length}
				</p>
				<p className="mt-2 text-emerald-800">Experiences currently saved in your list.</p>
			</aside>
		</section>
	);
}
