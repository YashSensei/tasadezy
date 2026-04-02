const fs = require("fs");

let c = fs.readFileSync("src/pages/HomePage.jsx", "utf-8");

// There are multiple button types. Let's find all tags that have Learn more or Try samples
let updated = c.replace(
  /<a[^>]*href=["'][^"']*["'][^>]*>[\s\S]*?<p[^>]*>[\s\S]*?(?:Try samples|Learn more)[\s\S]*?<\/p>[\s\S]*?<\/a>/g,
  (match) => {
    // If it has '#000000' as the explicit color, it's the "Why Tasadezy" button, skip it.
    if (match.includes("#000000") || match.includes('color: "#000000"')) {
      return match;
    }

    // Check if it's the standard button wrap format
    if (match.includes("backgroundColor: `var(")) {
      // Find the backgroundColor part
      match = match.replace(
        /backgroundColor:\s*`var\([^`]*\)`/,
        'backgroundColor: "#000"',
      );
    } else if (match.includes("backgroundColor:")) {
      match = match.replace(
        /backgroundColor:\s*"[^"]*"/,
        'backgroundColor: "#000"',
      );
    }

    if (match.includes("--framer-text-color: `var(")) {
      match = match.replace(
        /--framer-text-color:\s*`var\([^`]*\)`/g,
        '--framer-text-color: "#fff"',
      );
      match = match.replace(
        /--extracted-r6o4lv:\s*`var\([^`]*\)`/g,
        '--extracted-r6o4lv: "#fff"',
      );
    }

    return match;
  },
);

// Since the regex might be brittle, let's also directly string-replace the tokens used for those buttons just in case.
// Most of them use `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))` for bg
// and `var(--extracted-r6o4lv, var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255)))` for text
let lines = updated.split("\n");
updated = lines.join("\n");

fs.writeFileSync("src/pages/HomePage.jsx", updated);
console.log("Fixed button colors");
