class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var mp={};
        var arr = Array.from({length: nums.length + 1}, () => []);
        for(var n of nums) {
            mp[n] = (mp[n] || 0) + 1;
        }
        for(var obj in mp) {
            arr[mp[obj]].push(+obj);
        }
        let res = [];
        for(var j = arr.length - 1;j>=0;j--) {
            for(var n of arr[j]) {
                res.push(n);
                if(res.length == k) {
                    return res;
                }
            }
        }
        return res;
    }
}
