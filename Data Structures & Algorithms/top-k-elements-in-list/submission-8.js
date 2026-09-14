class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var mp = {};
        for(var num of nums) {
            if(mp[num] == undefined) {
                mp[num] = [0];
            }
            mp[num] = [((mp[num][0]) + 1), num];
        }
        
        let arr = [];
        for(var obj in mp) {
            arr.push([mp[obj][0], mp[obj][1]]);
        }
        arr.sort((a,b) => b[0] - a[0]);
        
        let res = [];
        let i=0;
        while(i < k) {
            console.log(mp[arr[i][1]][1]);
            res.push(mp[arr[i][1]][1]);
            i++;
        }
        return res;
    }
}
