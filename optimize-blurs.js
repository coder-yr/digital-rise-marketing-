const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const targetDir = path.join(__dirname, 'app');
const componentsDir = path.join(__dirname, 'components');

const files = [...walk(targetDir), ...walk(componentsDir)];

let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We want to find classes like: className="absolute top-[...] w-[...] bg-dr-gold/10 rounded-full blur-[100px]..."
    // We will just replace `blur-[...px]` with `blur-[...px] hidden md:block` IF it doesn't already have hidden.
    // However, some elements might already have hidden.
    // Better yet, just remove large blurs on mobile by ensuring hidden md:block is present on large background elements.
    
    // Instead of complex regex, let's manually find `blur-[` > 80px and add hidden lg:block or hidden md:block 
    // replacing things like <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-dr-gold/5 rounded-full blur-[140px]" />
    
    content = content.replace(/className="([^"]*blur-\[(100|120|140|160|200)px\][^"]*)"/g, (match, classes) => {
        if (!classes.includes('hidden ')) {
            // prepend hidden md:block
            return `className="hidden md:block ${classes}"`;
        } else if (classes.includes('lg:hidden')) {
            // It's a mobile only blur! Change to radial gradient
             // Not safe to auto-guess radial for everything. Let's just remove lg:hidden blur entirely or make it a much smaller blur, but better to just return as is if we handled it manually.
             return match;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Optimized ${changedCount} files.`);
