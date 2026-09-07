class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var mapofN={};
        if(nums.length==0) {
            return false;
        }
        for(var i=0;i < nums.length;i++){
            
            if(mapofN[nums[i]] == nums[i]) {
                return true;
            } else {
                mapofN[nums[i]] = nums[i];
            }
        }
        return false;
    }
}
