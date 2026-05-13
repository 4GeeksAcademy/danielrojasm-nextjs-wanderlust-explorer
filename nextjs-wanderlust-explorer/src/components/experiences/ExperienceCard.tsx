"use client";

import { Experience } from "@/types/experience";
import Link from "next/link";

interface ExperienceCardProps {
	experience: Experience;
	isFavorite: boolean;
	onToggleFavorite: (experienceId: number) => void;
}

export function ExperienceCard({
	experience,
	isFavorite,
	onToggleFavorite,
}: ExperienceCardProps) {
	return (
		<article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
			<div className="relative">
				<img
					src={experience.imageUrl}
					alt={experience.title}
					className="h-52 w-full object-cover"
					loading="lazy"
				/>
				<button
					type="button"
					aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
					onClick={() => onToggleFavorite(experience.id)}
					className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-sm font-semibold transition ${
						isFavorite
							? "border-rose-400 bg-rose-500 text-white"
							: "border-white/60 bg-black/40 text-white hover:bg-black/60"
					}`}
				>
					<svg
						viewBox="0 0 24 24"
						aria-hidden="true"
						className="h-5 w-5"
						fill={isFavorite ? "currentColor" : "none"}
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M12 21s-6.7-4.3-9.2-8C.8 10.1 1.2 6.8 4 5.1c2.4-1.5 5.2-.5 6.7 1.5 1.5-2 4.3-3 6.7-1.5 2.8 1.7 3.2 5 1.2 7.9C18.7 16.7 12 21 12 21z" />
					</svg>
					<span className="sr-only">{isFavorite ? "Favorited" : "Not favorited"}</span>
				</button>
			</div>

			<div className="space-y-3 p-5">
				<div className="flex items-center justify-between gap-2 text-sm text-slate-600">
					<span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-900">
						{experience.category}
					</span>
					<span>{experience.destination}</span>
				</div>

				<h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-slate-900">
					{experience.title}
				</h3>

				<p className="line-clamp-2 text-sm leading-6 text-slate-600">{experience.description}</p>

				<div className="flex items-center justify-between pt-2 text-sm">
					<span className="font-semibold text-slate-900">${experience.price}</span>
					<span className="text-slate-500">Rating {experience.rating}</span>
				</div>

				<Link
					href={`/experiences/${experience.id}`}
					className="inline-flex rounded-full border border-slate-900 px-4 py-1.5 text-sm font-medium text-slate-900 transition hover:bg-slate-900 hover:text-white"
				>
					View details
				</Link>
			</div>
		</article>
	);
}
