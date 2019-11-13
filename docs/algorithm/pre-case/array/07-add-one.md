```typescript 
import { TimeStatistics } from '../../../utils/time-log';
// 特意选了一个超出 MAX_SAFE_INTEGER 的数
const TEST_CASE = [1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];


// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。


/**
 * 第一反应是，去 NMD 类型，直接数组和字符串 API 一顿转，但是发现有超过 MAX_SAFE_INTGER 的用例，卒
 * 第二反应，倒叙遍历，按位判断，并且递归，最后发现是想复杂了
 * 
 * 
 * 实际上，有三种情况
 * 1. 个位 +1 后仍然小于 10，直接改变个位后，返回即可
 * 2. 个位 +1 后，等于 10，那么继续迭代
 * 3. 形如 [9,9,9] 需要加下标，则重新构建新数组:
 * `arr =  Array(length + 1).map(_ => 0) && arr[0] = 1;`
 * 
 * 说明小学数学老师的按位递进，是比较科学的方法
 * 
 * 
 * O(T) = O(N)
 * 109 cases used 68 ms
 */
function plusOne(arr: number[]) {
    // 倒序遍历
    for (let i = arr.length - 1; i >= 0; i--) {
        // 自增
        arr[i]++;
        // 取模
        arr[i] %= 10;
        /**
          * 判断模后的值是否等于 0，如果不等于 0 ,直接返回, 如果一直等于 0，那么
          * 形如 [9,9,9] 的数组，应该变成了 [0,0,0]，并结束了了迭代
          */
        if (arr[i] !== 0) return arr;
    }
    arr.unshift(1);
    return arr;
}
const t = new TimeStatistics(plusOne, [TEST_CASE]);
t.executeTenThousandTimes();

```