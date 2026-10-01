class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var mp = {};
        var arr = Array.from({length: nums.length + 1}, ()=> []);
        let res = [];
        for(var num of nums) {
            mp[num] = (mp[num] || 0) + 1;
        }
        for(var n in mp) {
            arr[mp[n]].push(+n);
        }
        for(var j=arr.length -1;j>=0;j--){
            for(var n of arr[j]){
                res.push(n);
                if(res.length == k) {
                    return res;
                }
            }
        }
        return res;
    }
}
