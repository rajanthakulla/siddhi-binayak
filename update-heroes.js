const fs = require('fs');
const path = require('path');

const gradientSnippet = `
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#FFF8F5] via-[#FFF8F5]/80 to-transparent">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,#FFE0D1_0%,transparent_60%)] opacity-80 blur-[80px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,#FFC1A3_0%,transparent_60%)] opacity-70 blur-[60px]" />
        </div>
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('Background Gradient Effect')) {
    console.log(`Skipping ${filePath} - already updated`);
    return;
  }

  if (!content.includes('pt-[72px]')) {
    console.log(`Skipping ${filePath} - no pt-[72px] found`);
    return;
  }

  content = content.replace(/pt-\[72px\] ?/, '');

  const sectionRegex = /<section className="([^"]+)">/;
  const match = content.match(sectionRegex);
  if (match) {
    let classes = match[1];
    
    if (!classes.includes('relative')) classes = 'relative ' + classes;
    if (!classes.includes('overflow-hidden')) classes = classes + ' overflow-hidden';

    classes = classes.replace(/py-\d+/g, '');
    classes = classes.replace(/lg:py-\d+/g, '');
    classes = classes.replace(/pt-\d+/g, '');
    classes = classes.replace(/pb-\d+/g, '');
    
    classes = classes.trim() + ' pt-[calc(72px+4rem)] pb-16 md:pt-[calc(72px+6rem)] md:pb-24';

    classes = classes.replace(/bg-white/g, '');
    classes = classes.replace(/bg-\[#FAFAFA\]/g, '');
    classes = classes.replace(/border-b border-surface-border/g, '');
    classes = classes.replace(/border-b/g, '');

    const oldSection = match[0];
    const newSection = `<section className="${classes.replace(/\s+/g, ' ')}">`;
    
    content = content.replace(oldSection, newSection + gradientSnippet);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('page.tsx')) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('./src/app', processFile);
