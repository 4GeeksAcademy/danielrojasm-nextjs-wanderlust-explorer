import { categories } from "@/data/experiences";
import { ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
	category: ExperienceCategory | "";
	destination: string;
	destinations: string[];
	onCategoryChange: (value: ExperienceCategory | "") => void;
	onDestinationChange: (value: string) => void;
	onClearFilters: () => void;
	activeFiltersCount: number;
}

export function FilterBar({
	category,
	destination,
	destinations,
	onCategoryChange,
	onDestinationChange,
	onClearFilters,
	activeFiltersCount,
}: FilterBarProps) {
	return (
		<div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_1fr_auto]">
			<label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
				Category
				<select
					value={category}
					onChange={(event) => onCategoryChange(event.target.value as ExperienceCategory | "")}
					className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
				>
					<option value="">All categories</option>
					{categories.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</label>

			<label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
				Destination
				<select
					value={destination}
					onChange={(event) => onDestinationChange(event.target.value)}
					className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
				>
					<option value="">All destinations</option>
					{destinations.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</label>

			<button
				type="button"
				onClick={onClearFilters}
				className="self-end rounded-2xl border border-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
			>
				Clear ({activeFiltersCount})
			</button>
		</div>
	);
}
