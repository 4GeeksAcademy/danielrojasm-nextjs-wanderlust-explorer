"use client";

import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";

export default function FavoritesPage() {
	const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();

	const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

	return (
		<section className="space-y-8">
			<div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
				<h1 className="font-[family-name:var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
					Your Favorites
				</h1>
				<p className="mt-3 text-slate-700">
					Saved experiences: <strong>{favoriteIds.length}</strong>
				</p>
			</div>

			{favoriteExperiences.length === 0 ? (
				<div className="rounded-3xl border border-dashed border-slate-400 bg-white/80 p-10 text-center text-slate-700">
					<p className="text-lg">No favorites yet.</p>
					<Link
						href="/experiences"
						className="mt-4 inline-flex rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
					>
						Explore experiences
					</Link>
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
					{favoriteExperiences.map((experience) => (
						<ExperienceCard
							key={experience.id}
							experience={experience}
							isFavorite={isFavorite(experience.id)}
							onToggleFavorite={toggleFavorite}
						/>
					))}
				</div>
			)}
		</section>
	);
}
