export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "8 ounces fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    steps: [
      "Heat the oven to 475°F (245°C) and stretch the dough onto a baking sheet.",
      "Spread the tomato sauce over the dough and add sliced mozzarella.",
      "Bake for 12-15 minutes, until the crust is golden and the cheese is bubbling.",
      "Top with basil and olive oil before serving.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1 teaspoon lemon juice",
      "Salt and black pepper",
      "Red pepper flakes",
    ],
    steps: [
      "Toast the sourdough until crisp and golden.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Spread the avocado over the toast and finish with red pepper flakes.",
    ],
  },
  {
    id: "creamy-ramen",
    title: "Creamy Garlic Ramen",
    emoji: "🍜",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Japanese",
    ingredients: [
      "2 packs ramen noodles",
      "3 cloves garlic, minced",
      "1 cup chicken or vegetable broth",
      "1/2 cup heavy cream",
      "2 green onions, sliced",
    ],
    steps: [
      "Cook the ramen noodles according to the package directions, then drain.",
      "Cook the garlic in a saucepan until fragrant, then stir in the broth and cream.",
      "Simmer the sauce for 3 minutes and toss with the noodles.",
      "Serve topped with sliced green onions.",
    ],
  },
  {
    id: "berry-smoothie-bowl",
    title: "Berry Smoothie Bowl",
    emoji: "🍓",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    ingredients: [
      "1 cup frozen mixed berries",
      "1 frozen banana",
      "1/2 cup Greek yogurt",
      "1/4 cup milk",
      "Granola and fresh berries for topping",
    ],
    steps: [
      "Blend the frozen berries, banana, yogurt, and milk until smooth and thick.",
      "Pour into a bowl and top with granola and fresh berries.",
    ],
  },
  {
    id: "street-tacos",
    title: "Street Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
    ingredients: [
      "8 small corn tortillas",
      "1 pound cooked chicken or mushrooms",
      "1/2 cup diced white onion",
      "1/2 cup chopped cilantro",
      "2 limes, cut into wedges",
    ],
    steps: [
      "Warm the tortillas in a dry skillet until soft and lightly charred.",
      "Divide the chicken or mushrooms among the tortillas.",
      "Top with onion and cilantro, then serve with lime wedges.",
    ],
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    emoji: "🍫",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Dessert",
    ingredients: [
      "4 ounces dark chocolate",
      "1/2 cup unsalted butter",
      "2 eggs",
      "1/3 cup sugar",
      "1/4 cup all-purpose flour",
    ],
    steps: [
      "Heat the oven to 425°F (220°C) and grease four ramekins.",
      "Melt the chocolate and butter together, then let the mixture cool slightly.",
      "Whisk the eggs and sugar, then fold in the chocolate mixture and flour.",
      "Divide between ramekins and bake for 10-12 minutes.",
      "Rest for 1 minute, then turn each cake onto a plate and serve warm.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
