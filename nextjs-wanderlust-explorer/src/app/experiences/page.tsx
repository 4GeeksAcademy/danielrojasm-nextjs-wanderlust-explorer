"use client";

import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { FilterBar } from "@/components/experiences/FilterBar";
import { SearchBar } from "@/components/experiences/SearchBar";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { useFavorites } from "@/hooks/useFavorites";

export default function ExperiencesPage() {
	const {
		filters,
		filteredExperiences,
		destinations,
		activeFiltersCount,
		setSearch,
		setCategory,
		setDestination,
		clearFilters,
	} = useExperienceFilters();

	const { isFavorite, toggleFavorite } = useFavorites();

	return (
		<section className="space-y-8">
			<div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur">
				<h1 className="font-[family-name:var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
					Explore Experiences
				</h1>
				<p className="mt-3 max-w-2xl text-slate-700">
					Search by title and combine filters. The URL updates automatically so you can share
					this exact result list.
				</p>
			</div>

			<div className="space-y-4">
				<SearchBar value={filters.search} onChange={setSearch} />
				<FilterBar
					category={filters.category}
					destination={filters.destination}
					destinations={destinations}
					onCategoryChange={setCategory}
					onDestinationChange={setDestination}
					onClearFilters={clearFilters}
					activeFiltersCount={activeFiltersCount}
				/>
			</div>

			{filteredExperiences.length === 0 ? (
				<div className="rounded-3xl border border-dashed border-slate-400 bg-white/80 p-10 text-center text-slate-700">
					No se encontraron resultados
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
					{filteredExperiences.map((experience) => (
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
