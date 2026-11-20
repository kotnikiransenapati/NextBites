import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="recipe-detail">
          <p>Loading recipe...</p>
        </main>
      }
    >
      <RecipeDetails params={params} />
    </Suspense>
  );
}

async function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link className="back-link" href="/">
        ← All recipes
      </Link>
      <article>
        <header className="recipe-detail-header">
          <div className="recipe-detail-art" aria-hidden="true">
            {recipe.emoji}
          </div>
          <h1>{recipe.title}</h1>
          <div className="card-meta">
            <span>⏱ {recipe.minutes} min</span>
            <span
              className={`difficulty difficulty-${recipe.difficulty.toLowerCase()}`}
            >
              {recipe.difficulty}
            </span>
            <span className="cuisine">{recipe.cuisine}</span>
          </div>
        </header>

        <div className="recipe-detail-content">
          <section aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading">Instructions</h2>
            <ol>
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}
