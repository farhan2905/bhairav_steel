const fs = require('fs');
let ts = fs.readFileSync('src/lib/products-data.ts', 'utf8');

const imageMap = {
  // Categories
  'Bulk Ferro Alloys': 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1400&auto=format&fit=crop', // Ores/Slag
  // 'Steel Products': already has good wiki image
  // 'ORE & Metals': already has good wiki image
  // 'Noble Ferro Alloys': already has good wiki image
  
  // Bulk Ferro
  'Silico Manganese': 'https://images.unsplash.com/photo-1587327903256-2265e70fb5ce?q=80&w=1400&auto=format&fit=crop', // metallic chunks
  'Ferro Manganese': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ferromanganese.jpg/800px-Ferromanganese.jpg',
  'Ferro Chrome': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ferrochrome.jpg/800px-Ferrochrome.jpg',
  'Ferro Silicon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ferrosilicon.JPG/800px-Ferrosilicon.JPG',
  'Silico Chrome': 'https://images.unsplash.com/photo-1621217036214-722a557b4202?q=80&w=1400&auto=format&fit=crop',

  // Steel
  'Billets & Blooms': 'https://images.unsplash.com/photo-1563062067-731ff6fb4ec4?q=80&w=1400&auto=format&fit=crop',
  'Carbon & Alloy Steel': 'https://images.unsplash.com/photo-1581093196277-9f608988f615?q=80&w=1400&auto=format&fit=crop',
  'Structural Sections': 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1400&auto=format&fit=crop',
  'Steel Sheets & Coils': 'https://images.unsplash.com/photo-1509390874189-d7585098e94a?q=80&w=1400&auto=format&fit=crop',
  'TMT Rebars': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Reinforcing_bar.jpg/800px-Reinforcing_bar.jpg',
  'Industrial Wires': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop',
  'Steel Pipes & Tubes': 'https://images.unsplash.com/photo-1585644837583-8a3fc0cd24b3?q=80&w=1400&auto=format&fit=crop',
  'Primary Feedstock': 'https://images.unsplash.com/photo-1621217036495-2cc3514ac01f?q=80&w=1400&auto=format&fit=crop',

  // Ores
  'Iron Ore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Iron_ore.jpg/800px-Iron_ore.jpg',
  'Sponge Iron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sponge_iron.jpg/800px-Sponge_iron.jpg',
  'Pig Iron': 'https://images.unsplash.com/photo-1534063223030-defb741031c2?q=80&w=1400&auto=format&fit=crop',
  'Manganese Ore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Manganese_ore_macro.jpg/800px-Manganese_ore_macro.jpg',

  // Noble
  'Ferro Molybdenum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Molybdenum.jpg/800px-Molybdenum.jpg',
  'Ferro Vanadium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Vanadium_etched.jpg/800px-Vanadium_etched.jpg',
  'Ferro Titanium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ferrotitanium.jpg/800px-Ferrotitanium.jpg',
  'Ferro Nickel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nickel_chunk.jpg/800px-Nickel_chunk.jpg',
  'Ferro Niobium': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Niobium_crystals_and_1cm3_cube.jpg/800px-Niobium_crystals_and_1cm3_cube.jpg',
  'Ferro Boron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Boron.jpg/800px-Boron.jpg',
  'Ferro Aluminum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Aluminium.jpg/800px-Aluminium.jpg',
  'Ferro Tungsten': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tungsten.jpg/800px-Tungsten.jpg'
};

for (const [name, url] of Object.entries(imageMap)) {
  // Use regex to carefully replace just the image url for that product
  // Look for: name: 'Something', ... image: 'oldurl'
  // But wait, there might be spacing. 
  // Let's do a more robust approach:
  const regex = new RegExp(`(name:\\s*['"]${name}['"][\\s\\S]*?image:\\s*['"])(.*?)(['"])`);
  ts = ts.replace(regex, `$1${url}$3`);
}

fs.writeFileSync('src/lib/products-data.ts', ts);
console.log('Images updated successfully in products-data.ts!');
