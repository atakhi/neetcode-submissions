class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = {};
        let i=0;
        for(const num of nums) {
            mp[num] = i;
            i++;
        }
        for(var j=0;j<nums.length;j++) {
            const diff = target - nums[j];
            const i = mp[diff];
            if(i != j && (diff + nums[j] == target) && i) {
                return [j, i];
            }
        }
        return [];
    }
}
