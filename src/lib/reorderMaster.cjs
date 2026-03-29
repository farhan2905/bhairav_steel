const fs = require('fs');

function popComma(b) {
    return b.replace(/},(\\s*)$/, '}$1');
}
function pushComma(b) {
    if (!b.match(/},(\\s*)$/)) {
        return b.replace(/}(\\s*)$/, '},$1');
    }
    return b;
}

const file = fs.readFileSync('src/lib/products-data.ts', 'utf8');

const t1 = "/*  1. BULK";
const t2 = "/*  2. NOBLE";
const t3 = "/*  3. ORE";
const t4 = "/*  4. STEEL";

let i1 = file.indexOf(t1);
let i2 = file.indexOf(t2);
let i3 = file.indexOf(t3);
let i4 = file.indexOf(t4);

function getStart(idx) {
    // Search backward to grab the border above the comment.
    // The previous border has "/* " and drawing chars.
    let lineIdx = file.lastIndexOf("  /* ╭", idx - 5);
    // If not found (maybe character changed), fallback to just grabbing a bit earlier
    if (lineIdx === -1) {
       lineIdx = file.lastIndexOf("  /* ", idx - 5);
    }
    return lineIdx !== -1 ? lineIdx : idx - 30; // fallback but usually found
}

let s1 = getStart(i1);
let s2 = getStart(i2);
let s3 = getStart(i3);
let s4 = getStart(i4);

let end = file.lastIndexOf("];");

if (i1 === -1 || i2 === -1 || i3 === -1 || i4 === -1) {
    console.error("Missing headers");
    process.exit(1);
}

let block1 = file.substring(s1, s2);
let block2 = file.substring(s2, s3);
let block3 = file.substring(s3, s4);
let block4 = file.substring(s4, end);

block1 = pushComma(block1);
block4 = pushComma(block4);
block3 = pushComma(block3);
block2 = pushComma(block2);

let prefix = file.substring(0, s1);
let suffix = file.substring(end);

let assembled = prefix + block1 + block4 + block3 + block2 + suffix;

fs.writeFileSync('src/lib/products-data.ts', assembled);
console.log("Reordered properly!");
