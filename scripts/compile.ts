import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { ensureFileSync } from "fs-extra";
import { extname, join } from "path";
const tsFiles = [];
const repoPath = join(__dirname, '../', 'try-leetcode', 'src');
fileDisplay(repoPath);

const target = tsFiles.map(a => a.split('src')[1]).map(name => join(__dirname, '../', 'docs', 'algorithm', name).replace('.ts', '.md'));

tsFiles.forEach((file, index) => {
    // .ts 文章内容
    const fileContext = readFileSync(file).toString();
    // 匹配 "// ![xx](xxxx.png)" 语法
    const patten = /\/\/\s{1}!\[\S+?\](\S+)/g;
    const mathedArray = fileContext.match(patten);
    let content = '';
    // mathedArray 代表匹配到的 "// ![xx](xxxx.png)" 字符串数组, 这里使用了 链式 语法
    if (Array.isArray(mathedArray) && mathedArray?.length > 0) {
        mathedArray.forEach(str => fileContext.replace(str, ''));
        content = mathedArray.reduce((acc, next) => acc + '\n' + next + '\n', '')
    }
    content += '```typescript \n' + fileContext + '\n```';
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
