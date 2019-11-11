import { exec } from 'child_process';
const logger = (err, stdout, stderr) => console.log(err, stdout, stderr);

exec(`cd try-leetcode && git pull`, logger);


