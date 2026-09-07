class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force
        // for(var i=0;i<nums.length;i++) {
        //     for(var j=0;j<nums.length;j++) {
        //         if(i!=j) {
        //             if(nums[i] + nums[j] == target) {
        //                 return [i, j];
        //             }
        //         }
        //     }
        // }

        // hash map 1, 2... ?
        var map1 = {};
        var map2 = {};
        for(var i=0;i<nums.length;i++) {
            map2[nums[i]] = i;
        }
        
        for(var i=0;i<nums.length;i++) {
            var diff = target - nums[i];
            if(map2[diff] != undefined && i != map2[diff]) {
                return [i, map2[diff]];
            }
        }
        
        return [];
    }
}
