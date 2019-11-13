import * as path from 'path';
let arr = [
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\easy\\01-two-num.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\easy\\015-three-num.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\easy\\657-machine-return-origin.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\in-work\\fibonacci-overflow.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\01-in-place-algorithm.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\02-买卖股票最佳时机2.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\03-rotate-array.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\04-exist-duplicate.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\05-single-number.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\06-intersect.ts',
    'C:\\Users\\admin\\projects\\algorithm-docs\\try-leetcode\\src\\pre-case\\Array\\07-add-one.ts'
];


const result = arr.map(a => a.split('src')[1]);


console.log(result);