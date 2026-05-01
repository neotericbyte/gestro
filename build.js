import { build } from "esbuild";

await build({
  entryPoints: ["src/gestro-image.js"],
  outfile: "dist/gestro-image.esm.js",
  bundle: true,
  format: "esm",
  minify: true,
  treeShaking: true,
});
