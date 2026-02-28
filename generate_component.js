import fs from 'fs';

try {
    const md = fs.readFileSync('homilia_joseph_v2.md', 'utf-8');
    const lines = md.split(/\r?\n/);
    const result = [];
    result.push('export function HomilyContent() {');
    result.push('  return (');
    result.push('    <div className="homily-content">');

    let firstP = true;
    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        // Removing the escape characters here since we already replaced markdown formatting
        if (line.startsWith('***') && line.endsWith('***')) {
            const text = line.replace(/\*\*\*/g, '');
            result.push(`      <p className="subtitle-italic">${text}</p>`);
        } else if (line.startsWith('**') && line.endsWith('**')) {
            const text = line.replace(/\*\*/g, '');
            result.push(`      <h2>${text}</h2>`);
        } else {
            let escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
            // Fix specific ! escaping from markdown 
            escaped = escaped.replace(/\\!/g, '!');

            if (firstP && escaped.startsWith('Louvado')) {
                result.push(`      <p className="drop-cap"><span className="first-letter">L</span>${escaped.substring(1)}</p>`);
                firstP = false;
            } else {
                result.push(`      <p>${escaped}</p>`);
            }
        }
    }

    result.push('    </div>');
    result.push('  );');
    result.push('}');

    fs.writeFileSync('src/HomilyContent.tsx', result.join('\n'));
    console.log('Success');
} catch (e) {
    console.error(e);
}
