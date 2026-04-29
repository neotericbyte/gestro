import { build } from "esbuild";

await build({
  entryPoints: ["src/gestro-image.js"],
  outfile: "dist/gestro.esm.js",
  bundle: true,
  format: "esm"
});

await build({
  entryPoints: ["src/gestro-image.js"],
  outfile: "dist/gestro.umd.js",
  bundle: true,
  format: "iife",
  globalName: "Gestro"
});