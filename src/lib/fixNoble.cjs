const fs = require('fs');

let code = fs.readFileSync('src/lib/products-data.ts', 'utf8');

const nStart = code.indexOf("slug: 'noble-ferro-alloys'");
const nImgPos = code.indexOf("image: '/quality_lab.jpg'", nStart);

if (nImgPos !== -1) {
  code = code.substring(0, nImgPos) + "image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ferrotitanium.jpg/800px-Ferrotitanium.jpg'" + code.substring(nImgPos + 25);
  console.log("Updated Noble!");
} else {
  console.log("Could not find Noble image tag");
}

fs.writeFileSync('src/lib/products-data.ts', code);
