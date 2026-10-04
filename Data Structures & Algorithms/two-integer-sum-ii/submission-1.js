class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var res = [];
        var left=0;
        var right = numbers.length - 1;
        while(left < right) {
            var sum = numbers[left] + numbers[right];
            if(sum == target) {
                return [left+1, right+1];
            } else {
                if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return [];
    }
}
