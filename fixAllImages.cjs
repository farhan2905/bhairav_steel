const fs = require('fs');

// We will use only strictly verified 200 HTTP images that are visually accurate
const g1 = 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200'; // factory sparks
const g2 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200'; // plant
const g3 = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200'; // workshop
const g4 = 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200'; // raw metal
const g5 = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200'; // machinery
const g6 = 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200'; // circuit/industrial
const g7 = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200'; // welding
const g8 = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200'; // warehouse/pipes
const g9 = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'; // generic metal
const g10 = 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200'; // generic verified


const map = {
  // categories
  'bulk-ferro-alloys': g1,
  'steel-products': g8,
  'ore-and-metals': g4,
  'noble-ferro-alloys': g9,
  
  // products
  'silico-manganese': g1,
  'ferro-manganese': g4,
  'ferro-chrome': g6,
  'ferro-silicon': g7,
  'silico-chrome': g6,
  
  'billets-and-blooms': g8,
  'carbon-alloy-spring-steel': g3,
  'structural-sections': g2,
  'steel-sheets-coils': g9,
  'tmt-rebars': g8,
  'industrial-wires': g9,
  'steel-pipes-tubes': g8,
  'primary-feedstock': g4,
  
  'iron-ore': g4,
  'sponge-iron': g4,
  'pig-iron': g4,
  'manganese-ore': g4,
  
  'ferro-molybdenum': g9,
  'ferro-vanadium': g9,
  'ferro-titanium': g9,
  'ferro-nickel': g6,
  'ferro-niobium': g6,
  'ferro-boron': g6,
  'ferro-aluminum': g6,
  'ferro-tungsten': g6
};

const tsPath = 'src/lib/products-data.ts';
let c = fs.readFileSync(tsPath, 'utf8');
const slugs = Object.keys(map);

let ok = 0;
for(const s of slugs) {
  let idx = c.indexOf(`slug: '${s}'`);
  if (idx !== -1) {
    let imgIdx = c.indexOf('image: ', idx);
    if(imgIdx !== -1 && imgIdx < idx + 15000) {
      let eol = c.indexOf('\n', imgIdx);
      c = c.substring(0, imgIdx) + `image: '${map[s]}',` + c.substring(eol);
      ok++;
    }
  }
}
fs.writeFileSync(tsPath, c, 'utf8');

// Fix app.tsx
const appPath = 'src/App.tsx';
let a = fs.readFileSync(appPath, 'utf8');
// bulk-ferro-alloys is g1
a = a.replace(/image: '[^']+'\,\s+to: '\/products\/bulk-ferro-alloys'/g, `image: '${g1}',\n      to: '/products/bulk-ferro-alloys'`);
// steel products is g8
a = a.replace(/image: '[^']+'\,\s+to: '\/products\/steel-products'/g, `image: '${g8}',\n      to: '/products/steel-products'`);
// ore
a = a.replace(/image: '[^']+'\,\s+to: '\/products\/ore-and-metals'/g, `image: '${g4}',\n      to: '/products/ore-and-metals'`);
// noble
a = a.replace(/image: '[^']+'\,\s+to: '\/products\/noble-ferro-alloys'/g, `image: '${g9}',\n      to: '/products/noble-ferro-alloys'`);

const hero1 = `src: '${g8}'`; // previously /products_stack
const hero2 = `src: '${g3}'`; // previously logistics/train etc
const hero3 = `src: '${g2}'`;
const hero4 = `src: '${g5}'`;
const hero5 = `src: '${g1}'`;

// Replace the 404 unsplash images in Hero
a = a.replace(/src: 'https:\/\/images.unsplash.com\/photo-1541888081622[^']+'/g, hero1);
a = a.replace(/src: 'https:\/\/images.unsplash.com\/photo-1577708534062[^']+'/g, hero2);
a = a.replace(/src: 'https:\/\/images.unsplash.com\/photo-1581092580497[^']+'/g, hero3);
a = a.replace(/src: 'https:\/\/images.unsplash.com\/photo-1580983546091[^']+'/g, hero4);
a = a.replace(/src: 'https:\/\/images.unsplash.com\/photo-1627993072314[^']+'/g, hero5);

fs.writeFileSync(appPath, a, 'utf8');
console.log('Fixed', ok, 'images in products-data and App.tsx');
