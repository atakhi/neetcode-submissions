class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var arr = [];
        var mp = {};
        for(var i=0;i<nums.length;i++) {
            arr.push([]);
            if(mp[nums[i]] == undefined) {
                mp[nums[i]] = 0;
            }
            mp[nums[i]] = mp[nums[i]] + 1;
        }
         arr.push([]);
        for(var obj in mp) {
            var num = obj;
            var freq = mp[obj];
            arr[freq].push(parseInt(num));
        }
        let res = [];
        for(var i= arr.length - 1;i >0;i--) {
            //res.push(arr[i]);
            //console.log(arr[i]);
            for (const n of arr[i]) {
               res.push(n);
               if(res.length == k) {
                return res;
                }
            }
            
        }
        return res;
    }
}
