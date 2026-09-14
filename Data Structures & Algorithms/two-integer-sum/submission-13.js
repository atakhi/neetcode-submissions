class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = {};
        let res = [];
        for(let i=0;i<nums.length;i++) {
            const diff = target - nums[i];
            if(mp[diff] == undefined) {
                mp[nums[i]] = i;
            } else {
                return [mp[diff], i];
            }
        }
    }
}
