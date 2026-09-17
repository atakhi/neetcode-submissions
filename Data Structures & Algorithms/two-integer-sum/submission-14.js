class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var mp = {};
        for(var i=0;i<nums.length;i++) {
            var num = nums[i];
            var diff = target - num;
            
            if(mp[diff] == undefined) {
                mp[num] = [i, diff];
            } else {
                return [mp[diff][0], i];
            }
        }
        return [];
    }
}
