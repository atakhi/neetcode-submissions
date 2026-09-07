class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //brute force O(n2), O(1)
        for(var i=0;i<nums.length;i++) {
            for(var j=0;j<nums.length;j++){
                if(i!=j) {
                    if(nums[i]==nums[j]) {
                        return true;
                    }
                }
            }
        }
        return false;

        //sorting? O(nlogn) O(1)
        // nums = nums.sort();
        // for(var i=0;i<nums.length - 1;i++) {
        //     if(nums[i] == nums[i+1])
        //         return true;
        // }
        // return false;
    }
}
