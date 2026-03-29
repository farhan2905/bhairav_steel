const fs = require('fs');

const jsonPath = 'C:/Users/PratikJagdishbhai/Downloads/bhargav_steel (2)/bhargav_steel (2)/bhairav_steel/bhairav-steel-data-package/extract/bhairav-steel-product-data.json';
const tsPath = 'C:/Users/PratikJagdishbhai/Downloads/bhargav_steel (2)/bhargav_steel (2)/bhairav_steel/src/lib/products-data.ts';

const jsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
let tsContent = fs.readFileSync(tsPath, 'utf8');

let productsWithComps = [];

jsData.productCategories.forEach(cat => {
  if (cat.products) {
    cat.products.forEach(p => {
      if (p.chemicalComposition && p.chemicalComposition.length > 0) {
        productsWithComps.push(p);
      }
    });
  }
});

let updatedCount = 0;
const slugMap = {
  'high-carbon-silico-manganese': 'silico-manganese',
  'high-carbon-ferro-manganese': 'ferro-manganese',
  'high-carbon-ferro-chrome': 'ferro-chrome',
  'ferro-silicon': 'ferro-silicon',
  'manganese-ore': 'manganese-ore',
  'sponge-iron': 'sponge-iron',
  'pig-iron': 'pig-iron',
  // noble alloys
  'ferro-vanadium': 'ferro-vanadium',
  'ferro-molybdenum': 'ferro-molybdenum',
  'ferro-titanium': 'ferro-titanium',
  'ferro-nickel': 'ferro-nickel',
  'ferro-niobium': 'ferro-niobium'
};

for (const p of productsWithComps) {
  let mappedSlug = slugMap[p.id] || p.id;
  
  const slugMarker = `slug: '${mappedSlug}'`;
  let slugIndex = tsContent.indexOf(slugMarker);

  if (slugIndex === -1) {
    console.log(`Could not find ${mappedSlug} in TS file.`);
    continue;
  }

  const specTableIndex = tsContent.indexOf('specTable:', slugIndex);
  if (specTableIndex === -1) {
    console.log(`Could not find specTable: for ${mappedSlug}`);
    continue;
  }
  
  // Find End of specTable:
  let bracketDepth = 0;
  let inBracket = false;
  let pos = specTableIndex;
  
  for(; pos < tsContent.length; pos++) {
    if(tsContent[pos] === '[') {
      bracketDepth++;
      inBracket = true;
    } else if(tsContent[pos] === ']') {
      bracketDepth--;
    }
    if(inBracket && bracketDepth === 0) {
      break;
    }
  }

  if (pos >= tsContent.length) {
    console.log(`Could not compute bounds for ${mappedSlug} spec table`);
    continue;
  }

  // Find the comma after the closing bracket
  const commaIndex = tsContent.indexOf(',', pos);
  if(commaIndex === -1) {
    console.log(`Could not find comma boundaries for ${mappedSlug}`);
    continue;
  }

  // Check if gradeTables already immediately follows
  const snippetAfter = tsContent.substring(commaIndex, tsContent.indexOf('physicalSpecs:', commaIndex) !== -1 ? tsContent.indexOf('physicalSpecs:', commaIndex) : commaIndex + 100);
  if(snippetAfter.includes('gradeTables:')) {
    console.log(`Skipping ${mappedSlug} because gradeTables already exists`);
    continue;
  }

  // We are going to parse and generate it
  let headersSet = new Set();
  p.chemicalComposition.forEach(row => {
    Object.keys(row).forEach(k => headersSet.add(k));
  });

  const headers = Array.from(headersSet);
  let labelKey = headers.find(h => /^grade|type|element|parameter/i.test(h)) || headers[0];
  const sortedHeaders = [labelKey, ...headers.filter(h => h !== labelKey)];

  const rows = [];
  p.chemicalComposition.forEach(row => {
    const rowArr = [];
    sortedHeaders.forEach(h => {
      rowArr.push(row[h] || '-');
    });
    rows.push(rowArr);
  });

  let gtString = `\n    gradeTables: [\n      {\n        name: 'Standard Chemical Composition',\n        headers: ${JSON.stringify(sortedHeaders)},\n        rows: [\n`;
  rows.forEach(r => {
    gtString += `          ${JSON.stringify(r)},\n`;
  });
  gtString += `        ]\n      }\n    ],`;

  tsContent = tsContent.substring(0, commaIndex+1) + gtString + tsContent.substring(commaIndex+1);
  updatedCount++;
  console.log(`[SUCCESS] Added matrix for ${mappedSlug}`);
}

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`Total Matrices added: ${updatedCount}`);
