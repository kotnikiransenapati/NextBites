import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
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

const Loading = loadModule("../app/loading.tsx").default;
const NotFound = loadModule("../app/not-found.tsx").default;
const ErrorPage = loadModule("../app/error.tsx").default;

test("loading state announces that content is loading", () => {
  const markup = renderToStaticMarkup(React.createElement(Loading));

  assert.match(markup, /aria-busy="true"/);
  assert.match(markup, /Loading recipes/);
});

test("not-found state provides a route back to the home page", () => {
  const markup = renderToStaticMarkup(React.createElement(NotFound));

  assert.match(markup, /Recipe not found/);
  assert.match(markup, /href="\/"/);
});

test("error state offers a working retry action", () => {
  let resetCount = 0;
  const element = ErrorPage({
    error: new Error("internal details"),
    reset: () => {
      resetCount += 1;
    },
  });
  const button = element.props.children.find(
    (child) => child?.type === "button",
  );

  assert.equal(button.props.children, "Try again");
  button.props.onClick();
  assert.equal(resetCount, 1);
});
