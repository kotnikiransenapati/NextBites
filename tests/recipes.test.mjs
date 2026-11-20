import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import ts from "typescript";

const loadModule = createRequire(import.meta.url);

function registerTypeScriptExtension(extension, jsx) {
  loadModule.extensions[extension] = (module, filename) => {
    const source = readFileSync(filename, "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        jsx: jsx ? ts.JsxEmit.ReactJSX : undefined,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    });

    module._compile(outputText, filename);
  };
}

registerTypeScriptExtension(".ts", false);
registerTypeScriptExtension(".tsx", true);

const { getRecipe, recipes } = loadModule("../app/data/recipes.ts");
const { filterRecipes } = loadModule("../app/components/RecipeGrid.tsx");

test("getRecipe returns the matching recipe and undefined for an unknown id", () => {
  assert.equal(getRecipe(recipes[0].id), recipes[0]);
  assert.equal(getRecipe("missing-recipe"), undefined);
});

test("filterRecipes searches titles and cuisines without case sensitivity", () => {
  assert.deepEqual(
    filterRecipes(recipes, "  ITALIAN "),
    recipes.filter((recipe) => recipe.cuisine === "Italian"),
  );
  assert.deepEqual(
    filterRecipes(recipes, "garlic"),
    recipes.filter((recipe) => recipe.title.includes("Garlic")),
  );
});

test("filterRecipes returns no results when nothing matches", () => {
  assert.deepEqual(filterRecipes(recipes, "not a recipe"), []);
});
