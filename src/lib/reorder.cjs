const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products-data.ts');
const code = fs.readFileSync(filePath, 'utf8');

// The headers
const h1 = "  /*  1. BULK FERRO ALLOYS                                   */";
const h2 = "  /*  2. NOBLE FERRO ALLOYS                                  */";
const h3 = "  /*  3. ORE & METALS                                        */";
const h4 = "  /*  4. STEEL PRODUCTS                                      */";

const split1 = code.indexOf("export const productCatalog: ProductCategory[] = [");
if (split1 === -1) {
  console.log("Could not find start of catalog!");
  process.exit(1);
}

const prefix = code.substring(0, split1 + "export const productCatalog: ProductCategory[] = [".length);
const restCode = code.substring(split1 + "export const productCatalog: ProductCategory[] = [".length);

// We need to carefully split by the "  /* ╭───────────────────" blocks that precede each header.
// Let's use Regex to find the blocks.

const b1 = restCode.indexOf("  /*  1. BULK FERRO ALLOYS                                   */");
const b2 = restCode.indexOf("  /*  2. NOBLE FERRO ALLOYS                                  */");
const b3 = restCode.indexOf("  /*  3. ORE & METALS                                        */");
const b4 = restCode.indexOf("  /*  4. STEEL PRODUCTS                                      */");

// The blocks themselves start slightly before the actual text (at the top decorative border)
// But we can just split exactly at the top border of each section.

// Let's look for the decorative borders.
const blockDelim = "  /* ╭─────────────";
let delimRegex = /^[ \t]*\/\* ╭─+ \*\//gm;

const matches = [...restCode.matchAll(delimRegex)];
// Each section has a top border and a bottom border. 
// So:
// matches[0] = Top border of 1. BULK
// matches[1] = Bottom border of 1. BULK
// matches[2] = Top border of 2. NOBLE
// matches[3] = Bottom border of 2. NOBLE
// etc. Let's just find the indexes of:
// "  /*  1. BULK", "  /*  2. NOBLE", etc.
// And work our way backward to the start of the comment block.

function getBlockStart(headerStr) {
  const hIdx = restCode.indexOf(headerStr);
  const borderIdx = restCode.lastIndexOf("  /* ╭──", hIdx);
  return borderIdx;
}

const start1 = getBlockStart(h1);
const start2 = getBlockStart(h2);
const start3 = getBlockStart(h3);
const start4 = getBlockStart(h4);

// The end of block 4 is at `];`
const endAll = restCode.lastIndexOf("];");

if (start1===-1 || start2===-1 || start3===-1 || start4===-1 || endAll===-1) {
    console.error("Could not find blocks properly.");
    console.log({start1, start2, start3, start4, endAll});
    process.exit(1);
}

const blockBulk = restCode.substring(start1, start2);
const blockNoble = restCode.substring(start2, start3);
const blockOre = restCode.substring(start3, start4);
const blockSteelWithEnd = restCode.substring(start4, endAll);

// Wait, the blockSteel currently ends just before `];`. But we need to make sure the last block in our new array formatting doesn't have a trailing comma if it causes issues, though TS allows trailing commas.
// Wait, actually `blockSteel` might not have a trailing comma, while `blockOre` etc. do.

let newBulk = blockBulk;
let newSteel = blockSteelWithEnd;
let newOre = blockOre;
let newNoble = blockNoble;

// Ensure all blocks except the last one have a comma at the end of their object.
// The objects end right before the next `  /* ╭──` border.
// Let's just blindly add commas to the end of the text right before the final newline if it's not there.
// Actually, they already have commas! Because they are array elements. 
// The only one that might NOT have a comma is the one that used to be last (Steel).
if (!newSteel.trim().endsWith(',')) {
    // Add comma to the end of the object. We can just append `,` before the trailing whitespace.
    newSteel = newSteel.replace(/}(\s*)$/, '},$1');
}
// For Noble, which is becoming the last element, we can leave its comma, trailing commas are 100% fine in TS arrays.

const newCode = prefix + newBulk + newSteel + newOre + newNoble + restCode.substring(endAll);

fs.writeFileSync(filePath, newCode);
console.log("Reordered successfully!");
