class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var freq = {};
        var count = Array.from({ length: nums.length + 1 }, () => []);
        for(var num of nums) {
            if(freq[num] == undefined){
                freq[num] = 0;
            }
            freq[num]++;
        }
        for(var num in freq) {
            if(count[freq[num]] == undefined) {
                count[freq[num]] = [];
            }
            count[freq[num]].push(num);
        }
        console.log(count);
        let res = [];
        for(var i=count.length - 1;i>0;i--){
            for(var el of count[i]) {
                res.push(el);
                if(res.length == k) {
                    return res;
                }
            }
        }
        return res;
    }
}
