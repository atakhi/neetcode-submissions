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
            pre[i] = pre[i-1]*nums[i-1];
        }
        console.log(pre);
        for(var i=nums.length - 2; i>=0;i--) {
            post[i] = post[i+1] * nums[i+1];
        }
        console.log(post);
        for(var i=0;i<nums.length;i++) {
            res[i] = pre[i] * post[i];
        }
        return res;
    }
}
