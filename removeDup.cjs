const fs = require('fs');
let c = fs.readFileSync('src/lib/products-data.ts', 'utf8');

let mark = "        gradeTables: [\n          {\n            name: 'Standard Chemical Composition of Silico Manganese";
let idx = c.indexOf(mark);
let endIdx = c.indexOf('        specTable: [', idx);

if(idx !== -1 && endIdx !== -1) {
    c = c.substring(0, idx) + c.substring(endIdx);
    fs.writeFileSync('src/lib/products-data.ts', c);
    console.log('Removed duplicate table');
} else {
    console.log('Not found');
}
