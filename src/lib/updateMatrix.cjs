const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products-data.ts');
let code = fs.readFileSync(filePath, 'utf8');
code = code.replace(/\r\n/g, '\n');

// Phase 1: Inject gradeTables to silico-manganese
const searchAnchor = `        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 40–74%, Si 10–30%, C 0.1–2%',`;

const replaceWith = `        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 40–74%, Si 10–30%, C 0.1–2%',
        gradeTables: [
          {
            title: 'Standard Chemical Composition of Silico Manganese (%)',
            headers: ['Mn', 'Si', 'C', 'P', 'S'],
            rows: [
              ['40-45%', '10-20%', '1.5-2%', '0.30% Max', '0.04% Max'],
              ['55-60%', '12-16%', '1.5-2%', '0.10-0.30% Max', '0.04% Max'],
              ['60-65%', '13-17%', '1.5-2%', '0.10-0.30% Max', '0.04% Max'],
              ['65-70%', '16-20%', '1.5-2%', '0.10-0.30% Max', '0.04% Max'],
              ['70-74%', '16-30%', '0.10-2% Max', '0.04-0.10% Max', '0.04% Max'],
            ],
          },
        ],`;

if (!code.includes("Standard Chemical Composition of Silico Manganese")) {
  if (code.includes(searchAnchor)) {
    code = code.replace(searchAnchor, replaceWith);
    console.log("Injected gradeTables for Silico Manganese.");
  } else {
    console.log("Could not find searchAnchor for Silico Manganese!");
  }
}

// Phase 2: Update images for ORE and NOBLE and Steel
const imgOreSearch = `    name: 'ORE & Metals',
    slug: 'ore-and-metals',
    description:
      'Raw and semi-processed metal inputs supporting steel value chain — from ore to metal.',
    image: '/contact_yard.jpg',`;
const imgOreReplace = `    name: 'ORE & Metals',
    slug: 'ore-and-metals',
    description:
      'Raw and semi-processed metal inputs supporting steel value chain — from ore to metal.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Manganese_ore_macro.jpg/800px-Manganese_ore_macro.jpg',`;

if (code.includes(imgOreSearch)) {
  code = code.replace(imgOreSearch, imgOreReplace);
  console.log("Updated ORE image.");
}

const imgNobleSearch = `    name: 'Noble Ferro Alloys',
    slug: 'noble-ferro-alloys',
    description:
      'Specialty high-value alloys used in smaller quantities to impart critical properties such as heat resistance, corrosion resistance, and specific mechanical strengths.',
    image: '/quality_lab.jpg',`;
const imgNobleReplace = `    name: 'Noble Ferro Alloys',
    slug: 'noble-ferro-alloys',
    description:
      'Specialty high-value alloys used in smaller quantities to impart critical properties such as heat resistance, corrosion resistance, and specific mechanical strengths.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ferrotitanium.jpg/800px-Ferrotitanium.jpg',`;

if (code.includes(imgNobleSearch)) {
  code = code.replace(imgNobleSearch, imgNobleReplace);
  console.log("Updated Noble image.");
}

const imgSteelSearch = `    name: 'Steel Products',
    slug: 'steel-products',
    description:
      'Finished and semi-finished steel products supplied across structural, fabrication, and industrial sectors.',
    image: '/products_stack.jpg',`;
const imgSteelReplace = `    name: 'Steel Products',
    slug: 'steel-products',
    description:
      'Finished and semi-finished steel products supplied across structural, fabrication, and industrial sectors.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Steel_wire_rope.png/800px-Steel_wire_rope.png',`;

if (code.includes(imgSteelSearch)) {
  code = code.replace(imgSteelSearch, imgSteelReplace);
  console.log("Updated Steel image.");
}

fs.writeFileSync(filePath, code);
console.log("Done.");
