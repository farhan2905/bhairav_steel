const fs = require('fs');

const tsPath = 'src/lib/products-data.ts';
let tsContent = fs.readFileSync(tsPath, 'utf8');

const imgMap = {
  // Bulk Ferro Alloys
  'silico-manganese': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Manganese_element.jpg/800px-Manganese_element.jpg',
  'ferro-manganese': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ferromanganese.jpg/800px-Ferromanganese.jpg',
  'ferro-chrome': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Ferrochrome.jpg/800px-Ferrochrome.jpg',
  'ferro-silicon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ferrosilicon.jpg/800px-Ferrosilicon.jpg',
  'silico-chrome': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',

  // Steel Products
  'billets-and-blooms': 'https://images.unsplash.com/photo-1533663045663-88da1e2db29f?q=80&w=1200',
  'carbon-alloy-spring-steel': 'https://images.unsplash.com/photo-1577708534062-8e1e7e408ec2?q=80&w=1200',
  'structural-sections': 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200',
  'steel-sheets-coils': 'https://images.unsplash.com/photo-1627993072314-fde6d8f28fa5?q=80&w=1200',
  'tmt-rebars': 'https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1200',
  'industrial-wires': 'https://images.unsplash.com/photo-1581093196277-9fd546d1bfec?q=80&w=1200',
  'steel-pipes-tubes': 'https://images.unsplash.com/photo-1580983546091-628a55ed238f?q=80&w=1200',
  'primary-feedstock': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pig_iron.jpg/800px-Pig_iron.jpg',

  // Ore & Metals
  'iron-ore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Iron_ore.jpg/800px-Iron_ore.jpg',
  'sponge-iron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sponge_iron.jpg/800px-Sponge_iron.jpg',
  'pig-iron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pig_iron.jpg/800px-Pig_iron.jpg',
  'manganese-ore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Manganese_ore_macro.jpg/800px-Manganese_ore_macro.jpg',

  // Noble Alloys
  'ferro-molybdenum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ferromolybdenum_macro.jpg/800px-Ferromolybdenum_macro.jpg',
  'ferro-vanadium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ferrovanadium.jpg/800px-Ferrovanadium.jpg',
  'ferro-titanium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ferrotitanium.jpg/800px-Ferrotitanium.jpg',
  'ferro-nickel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nickel_chunk.jpg/800px-Nickel_chunk.jpg',
  'ferro-niobium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Niobium_strip.jpg/800px-Niobium_strip.jpg',
  'ferro-boron': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
  'ferro-aluminum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Aluminium.jpg/800px-Aluminium.jpg',
  'ferro-tungsten': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Tungsten_rods.jpg/800px-Tungsten_rods.jpg'
};

const slugs = Object.keys(imgMap);

let updated = 0;
for (const slug of slugs) {
  const slugMarker = `slug: '${slug}'`;
  let slugIndex = tsContent.indexOf(slugMarker);
  
  if (slugIndex !== -1) {
    const nextImageKeyIndex = tsContent.indexOf('image: ', slugIndex);
    if (nextImageKeyIndex !== -1 && nextImageKeyIndex < slugIndex + 15000) {
      const endOfLine = tsContent.indexOf('\n', nextImageKeyIndex);
      const newLine = `image: '${imgMap[slug]}',`;
      
      tsContent = tsContent.substring(0, nextImageKeyIndex) + newLine + tsContent.substring(endOfLine);
      updated++;
      console.log(`Updated image for ${slug}`);
    }
  }
}

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`Updated ${updated} product images successfully!`);
