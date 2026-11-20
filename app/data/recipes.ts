export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
  },
  {
    id: "creamy-ramen",
    title: "Creamy Garlic Ramen",
    emoji: "🍜",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Japanese",
  },
  {
    id: "berry-smoothie-bowl",
    title: "Berry Smoothie Bowl",
    emoji: "🍓",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
  },
  {
    id: "street-tacos",
    title: "Street Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    emoji: "🍫",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Dessert",
  },
];
