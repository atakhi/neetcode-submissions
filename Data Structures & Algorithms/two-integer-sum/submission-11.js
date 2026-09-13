class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var i=0;
        var j=nums.length -1;
        let arr = [];
        
        for(var n of nums) {
            arr.push([n, i]);
            i++;
        }
        i=0;
        arr.sort((a,b) => a[0] - b[0]);
        console.log(arr);
        
        while(i<j) {
            const sum = arr[i][0] + arr[j][0];
            if( sum == target) {
                return [arr[i][1], arr[j][1]];
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
        return [];
    }
}
