"use client";

import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ExperienceDetailPage() {
	const params = useParams<{ id: string }>();
	const id = Number(params.id);
	const experience = experiences.find((item) => item.id === id);
	const { isFavorite, toggleFavorite } = useFavorites();

	useEffect(() => {
		if (experience) {
			document.title = `${experience.title} | Wanderlust Explorer`;
			return;
		}

		document.title = "Experience not found | Wanderlust Explorer";
	}, [experience]);

	if (!experience) {
		return (
			<section className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow">
				<h1 className="font-[family-name:var(--font-display)] text-4xl">Experience not found</h1>
				<p className="mt-2">The selected experience does not exist.</p>
				<Link
					href="/experiences"
					className="mt-6 inline-flex rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-900 hover:text-white"
				>
					Back to experiences
				</Link>
			</section>
		);
	}

	const favorite = isFavorite(experience.id);

	return (
		<article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
			<img
				src={experience.imageUrl}
				alt={experience.title}
				className="h-72 w-full object-cover sm:h-96"
			/>

			<div className="space-y-5 p-6 sm:p-10">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<h1 className="font-[family-name:var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
						{experience.title}
					</h1>
					<button
						type="button"
						onClick={() => toggleFavorite(experience.id)}
						className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
							favorite
								? "bg-rose-500 text-white"
								: "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
						}`}
					>
						{favorite ? "Heart saved" : "Add to favorites"}
					</button>
				</div>

				<div className="flex flex-wrap gap-3 text-sm text-slate-700">
					<span className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">
						{experience.category}
					</span>
					<span className="rounded-full bg-slate-100 px-3 py-1">{experience.destination}</span>
					<span className="rounded-full bg-slate-100 px-3 py-1">${experience.price}</span>
					<span className="rounded-full bg-slate-100 px-3 py-1">Rating {experience.rating}</span>
				</div>

				<p className="max-w-3xl text-base leading-8 text-slate-700">{experience.description}</p>

				<Link
					href="/experiences"
					className="inline-flex rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
				>
					Back to explorer
				</Link>
			</div>
		</article>
	);
}
