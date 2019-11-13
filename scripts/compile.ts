import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { ensureFileSync } from "fs-extra";
import { extname, join } from "path";
const tsFiles = [];
const repoPath = join(__dirname, '../', 'try-leetcode', 'src');
fileDisplay(repoPath);

const target = tsFiles.map(a => a.split('src')[1]).map(name => join(__dirname, '../', 'docs', 'algorithm', name).replace('.ts', '.md'));
console.log(target);

tsFiles.forEach((file, index) => {
    const content = '```typescript \n' + readFileSync(file) + '\n```';
    ensureFileSync(target[index]);
    writeFileSync(target[index], content);
})









function fileDisplay(filePath: string) {
    readdirSync(filePath).forEach(filename => {
        const p = join(filePath, filename);
        if (statSync(p).isFile()) {
            extname(p) === '.ts' && tsFiles.push(p);
        }
        if (statSync(p).isDirectory()) {
            fileDisplay(p);
        }
    });
}
