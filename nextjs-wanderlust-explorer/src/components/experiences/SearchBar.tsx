interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<label className="flex w-full flex-col gap-2 text-sm font-medium text-slate-700">
			Search by title
			<input
				type="search"
				value={value}
				onChange={(event) => onChange(event.target.value)}
				placeholder="Try: Skyline, Flavor, Calm..."
				className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
			/>
		</label>
	);
}
