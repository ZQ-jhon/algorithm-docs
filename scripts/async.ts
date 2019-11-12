import { exec } from 'child_process';
import { promisify } from 'util';

const logger = (stdout, stderr) => console.log(stdout, stderr);
const execute = promisify(exec);

export function asyncChildRepo() {
    return execute(`cd try-leetcode && git pull`)
        .then(res => {
            logger(res.stdout, res.stderr);
            console.log(`子仓库代码已同步完成`);
        })
        .catch(err => console.log(`拉取子仓库代码时出现错误, ${err}`));
}

asyncChildRepo();