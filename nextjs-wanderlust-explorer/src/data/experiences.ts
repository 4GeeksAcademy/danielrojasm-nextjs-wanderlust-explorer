import { Experience, ExperienceCategory } from "@/types/experience";

export const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Bali, Indonesia",
  "Cusco, Peru",
  "Kyoto, Japan",
  "Lisbon, Portugal",
  "Reykjavik, Iceland",
  "Marrakech, Morocco",
  "Queenstown, New Zealand",
  "Dubrovnik, Croatia",
  "Cappadocia, Turkey",
  "Banff, Canada",
  "Siem Reap, Cambodia",
  "Chefchaouen, Morocco",
  "Puerto Viejo, Costa Rica",
  "Medellin, Colombia",
  "Naples, Italy",
  "Hanoi, Vietnam",
  "Valletta, Malta",
  "Pokhara, Nepal",
  "Porto, Portugal",
  "Split, Croatia",
];

const activityByCategory: Record<ExperienceCategory, string[]> = {
  Adventure: ["kayak", "hike", "climb", "dive", "sail"],
  Culture: ["museum", "heritage", "craft", "festival", "history"],
  Food: ["market", "tasting", "street food", "chef table", "farm"],
  Wellness: ["retreat", "yoga", "spa", "mindfulness", "thermal"],
  Nature: ["wildlife", "forest", "sunrise", "waterfall", "stargazing"],
};

const titleByCategory: Record<ExperienceCategory, string[]> = {
  Adventure: ["Coastal Rush", "Summit Quest", "Wild Current", "Skyline Trek", "Ridge Escape"],
  Culture: [
    "Echoes of Tradition",
    "Timeless Streets",
    "Living Heritage",
    "Old Town Stories",
    "Artisan Trails",
  ],
  Food: ["Flavor Atlas", "Midnight Bites", "From Farm to Fork", "Local Table", "Spice Journey"],
  Wellness: ["Stillness Session", "Breath and Balance", "Calm Horizons", "Restore Escape", "Inner Reset"],
  Nature: ["Green Silence", "Riverlight Walk", "Wilderness Pulse", "Earth Rhythm", "Golden Dawn"],
};

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const categoryIndex = Math.floor(index / categories.length) % 5;

  const title = `${titleByCategory[category][categoryIndex]} in ${destination.split(",")[0]}`;
  const activity = activityByCategory[category][index % activityByCategory[category].length];
  const price = 80 + ((index * 19) % 420);
  const rating = Number((3.8 + ((index % 13) * 0.1)).toFixed(1));

  return {
    id,
    title,
    description:
      `Experience ${id} invites you to ${activity} while exploring the local atmosphere of ${destination}. ` +
      `You will join a small group, connect with local guides, and enjoy a carefully designed ${category.toLowerCase()} itinerary.`,
    category,
    destination,
    price,
    rating,
    imageUrl: `https://picsum.photos/seed/wanderlust-${id}/1200/800`,
  };
});

export const destinationOptions = Array.from(new Set(experiences.map((item) => item.destination)));
