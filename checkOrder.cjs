const fs = require('fs');
const t = fs.readFileSync('src/lib/products-data.ts', 'utf8');
const order = t.split('slug:').filter(s => s.trim().startsWith('\'bulk') || s.trim().startsWith('\'steel') || s.trim().startsWith('\'noble') || s.trim().startsWith('\'ore-'))
               .map(s => s.trim().split('\'')[1])
               .filter(s => ['bulk-ferro-alloys', 'steel-products', 'ore-and-metals', 'noble-ferro-alloys'].includes(s));
console.log(order);
