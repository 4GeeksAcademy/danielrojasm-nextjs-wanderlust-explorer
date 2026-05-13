"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface FavoritesContextValue {
  favoriteIds: number[];
  toggleFavorite: (experienceId: number) => void;
  isFavorite: (experienceId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      toggleFavorite: (experienceId: number) => {
        setFavoriteIds((current) => {
          if (current.includes(experienceId)) {
            return current.filter((id) => id !== experienceId);
          }

          return [...current, experienceId];
        });
      },
      isFavorite: (experienceId: number) => favoriteIds.includes(experienceId),
    }),
    [favoriteIds],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }

  return context;
}
