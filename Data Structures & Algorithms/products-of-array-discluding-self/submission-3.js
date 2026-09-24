class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var pre = Array(nums.length).fill(1);
        var post = Array(nums.length).fill(1);
        var res = Array(nums.length).fill(1);
        pre[0] = 1;
        post[nums.length - 1] = 1;
        for(var i=1;i<nums.length;i++) {
            pre[i] = pre[i-1] * nums[i-1];
        }
        console.log(pre);
        for(var j = nums.length - 2;j>=0;j--) {
            post[j] = post[j+1] * nums[j+1];
        }
        for(var i=0;i<nums.length;i++) {
            res[i] = pre[i] * post[i];
        }
        console.log(post);
        return res;
    }
}
