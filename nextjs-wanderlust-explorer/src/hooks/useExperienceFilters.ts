"use client";

import { destinationOptions, experiences } from "@/data/experiences";
import { escapeRegex } from "@/lib/escapeRegex";
import { Experience, ExperienceCategory } from "@/types/experience";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export interface ExperienceFilters {
  search: string;
  category: ExperienceCategory | "";
  destination: string;
}

const parseFilters = (params: URLSearchParams): ExperienceFilters => {
  const search = params.get("search") ?? "";
  const category = (params.get("category") as ExperienceCategory | "") ?? "";
  const destination = params.get("destination") ?? "";

  return { search, category, destination };
};

export function useExperienceFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<ExperienceFilters>(() =>
    parseFilters(new URLSearchParams(searchParams.toString())),
  );

  useEffect(() => {
    setFilters(parseFilters(new URLSearchParams(searchParams.toString())));
  }, [searchParams]);

  const updateFilter = (field: keyof ExperienceFilters, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(field, value);
    } else {
      params.delete(field);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);

    setFilters((prev) => ({ ...prev, [field]: value } as ExperienceFilters));
  };

  const filteredExperiences = useMemo<Experience[]>(() => {
    const term = filters.search.trim();
    const regex = term ? new RegExp(escapeRegex(term), "i") : null;

    return experiences.filter((experience) => {
      const matchesSearch = regex ? regex.test(experience.title) : true;
      const matchesCategory = filters.category ? experience.category === filters.category : true;
      const matchesDestination = filters.destination
        ? experience.destination.toLowerCase().includes(filters.destination.toLowerCase())
        : true;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [filters]);

  const activeFiltersCount = useMemo(
    () => [filters.search, filters.category, filters.destination].filter(Boolean).length,
    [filters],
  );

  return {
    filters,
    filteredExperiences,
    destinations: destinationOptions,
    activeFiltersCount,
    setSearch: (value: string) => updateFilter("search", value),
    setCategory: (value: ExperienceCategory | "") => updateFilter("category", value),
    setDestination: (value: string) => updateFilter("destination", value),
    clearFilters: () => {
      router.replace(pathname);
      setFilters({ search: "", category: "", destination: "" });
    },
  };
}
