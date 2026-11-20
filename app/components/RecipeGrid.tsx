"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export function filterRecipes(recipes: Recipe[], query: string): Recipe[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return recipes;
  }

  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );
}

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const filteredRecipes = filterRecipes(recipes, query);

  return (
    <section className="recipe-browser" aria-label="Recipe search and results">
      <label className="search-field">
        <span className="sr-only">Search recipes by title or cuisine</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search recipes or cuisines..."
        />
      </label>

      {filteredRecipes.length > 0 ? (
        <div className="grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="empty-state" role="status">
          No recipes match &quot;{query}&quot;. Try another title or cuisine.
        </p>
      )}
    </section>
  );
}
