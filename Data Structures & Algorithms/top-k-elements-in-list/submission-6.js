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
        
        for(const num of nums) {
            mp[num] = (mp[num] || 0) + 1;
        }
        
        var mheap = new MinPriorityQueue((x) => x[1]);
        for(var key in mp) {
            mheap.enqueue([key, mp[key]]);
            if(mheap.size() > k) {
                mheap.dequeue();
            }
        }
        var res = [];
        for(var i=0;i<k;i++) {
            const [num, count] = mheap.dequeue();
            res.push(num);
        }    
        return res;
    }
}
