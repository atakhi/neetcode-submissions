class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) {
            return 0;
        }
        nums = nums.sort((a,b) => a-b);
        var currStreak = 1;
        var maxStreak = 1;
        console.log(nums);
        for(var i=1;i<nums.length;i++) {
            if(nums[i-1] == nums[i])
                continue;
            if(nums[i] == nums[i-1] + 1) {
                currStreak++;
            } else{
                maxStreak = Math.max(currStreak,maxStreak);
                currStreak = 1;
            }
        }
        maxStreak = Math.max(currStreak,maxStreak);
        return maxStreak;
    }
}
