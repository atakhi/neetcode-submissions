class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute force
        var res = [];
        var mp = {};
        var inmp = {};
        
        for(var i=0;i<nums.length;i++) {
            const num = nums[i];
            if(mp[num] == undefined) {
                mp[num] = 0;
            }
            mp[num] = mp[num] + 1;
        }
        var freq = [];
        for(var key in mp) {
            freq.push([key, mp[key]]);
        }
        freq.sort((a,b) => b[1]-a[1]);
        
        // sort
        // hashmap
        return freq.slice(0, k).map((pair) => pair[0]);
    }
}
