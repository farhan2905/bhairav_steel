const fs = require('fs');

const map = {
  'bulk-ferro-alloys': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ferromanganese.jpg/800px-Ferromanganese.jpg',
  'silico-manganese': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Silicomanganese.jpg',
  'silico-chrome': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chromium.jpg/800px-Chromium.jpg',
  'billets-and-blooms': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Steel_billets_%28continuous_casting%29.jpg/800px-Steel_billets_%28continuous_casting%29.jpg',
  'carbon-alloy-spring-steel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Car_spring_suspension.jpg/800px-Car_spring_suspension.jpg',
  'structural-sections': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Steel_I-beams.jpg/800px-Steel_I-beams.jpg',
  'steel-sheets-coils': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steel_coils.jpg/800px-Steel_coils.jpg',
  'industrial-wires': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Steel_wire_roll.jpg/800px-Steel_wire_roll.jpg',
  'steel-pipes-tubes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Steel_pipes.jpg/800px-Steel_pipes.jpg',
  'primary-feedstock': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pig_iron.jpg/800px-Pig_iron.jpg',
  'pig-iron': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pig_iron.jpg/800px-Pig_iron.jpg'
};

let content = fs.readFileSync('src/lib/products-data.ts', 'utf8');
let updatedCount = 0;

for (let slug in map) {
  let slugMarker = `slug: '${slug}'`;
  let slugIdx = content.indexOf(slugMarker);
  
  if (slugIdx !== -1) {
    let imgIdx = content.indexOf('image: ', slugIdx);
    
    // Safety bound to ensure we don't grab the wrong image
    let nextSlugIdx = content.indexOf('slug: ', slugIdx + 10);
    if (nextSlugIdx === -1) nextSlugIdx = content.length;
    
    if (imgIdx !== -1 && imgIdx < nextSlugIdx) {
      let qStart = content.indexOf("'", imgIdx) + 1;
      let qEnd = content.indexOf("'", qStart);
      
      let oldImg = content.substring(qStart, qEnd);
      content = content.substring(0, qStart) + map[slug] + content.substring(qEnd);
      console.log(`Updated ${slug}. Old: ${oldImg} -> New: ${map[slug]}`);
      updatedCount++;
    }
  }
}

fs.writeFileSync('src/lib/products-data.ts', content, 'utf8');
console.log(`Updated ${updatedCount} images.`);
