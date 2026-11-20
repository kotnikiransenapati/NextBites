import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <div className="card-art">{recipe.emoji}</div>
      <h3>{recipe.title}</h3>
      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span>
        <span className={`difficulty difficulty-${recipe.difficulty.toLowerCase()}`}>
          {recipe.difficulty}
        </span>
        <span className="cuisine">{recipe.cuisine}</span>
      </div>
    </div>
  );
}
