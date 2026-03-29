const fs = require('fs');
const content = fs.readFileSync('src/lib/products-data.ts', 'utf8');

let parts = content.split("slug: '");
for (let i = 1; i < parts.length; i++) {
    let slug = parts[i].substring(0, parts[i].indexOf("'"));
    let imgIdx = parts[i].indexOf("image: '");
    if (imgIdx !== -1) {
        let imgStart = imgIdx + 8;
        let img = parts[i].substring(imgStart, parts[i].indexOf("'", imgStart));
        console.log(slug, '->', img);
    }
}
