import fs from "fs";
import path from "path";

// paths
const examplePath = "example/index.html";
const distPath = "dist/index.html";

function deployExample(exampleFile) {
  // read file
  let html = fs.readFileSync(path.join("examples", exampleFile), "utf-8");

  // replace import path
  html = html.replace(
    'import "../src/gestro-image.js";',
    'import "./gestro.esm.js";',
  );

  // ensure dist exists
  fs.mkdirSync("dist", { recursive: true });

  // write modified file
  fs.writeFileSync(path.join("dist", exampleFile), html);
}

deployExample("index.html");
deployExample("postcard.html");

console.log("✔ example/index.html copied and transformed to dist/");
