class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute force
        var res = [];
        var bucket = [];
        var mp={};
        for(var i=0;i<nums.length + 1;i++) {
            bucket.push([]);
        }
        for(var i=0;i<nums.length;i++) {
            mp[nums[i]] = (mp[nums[i]] || 0 ) + 1;
        }
        for(var key in mp) {
           bucket[mp[key]].push(+key); 
        }
        for(var i=bucket.length - 1;i>0;i--) {
            for(const n of bucket[i]) {
                res.push(n);
                if(res.length == k) {
                    return res;
                }
            }
        }
        return res;
    }
}
