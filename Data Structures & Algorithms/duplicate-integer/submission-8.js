class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mp = {};
        for(var n of nums) {
            if(mp[n] == undefined) {
                mp[n] = 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
