class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var pre = Array(nums.length).fill(1);
        var post = Array(nums.length).fill(1);
        pre[0] = 1;
        post[nums.length -1] = 1;
        for(var i=1;i<nums.length;i++) {
            let prod=1;
            pre[i] = nums[i -1] * pre[i - 1];
        }
        for(var j=nums.length - 2;j>=0;j--) {
            let prod=1;
            post[j] = nums[j+1] * post[j + 1];
        }
        console.log(pre);
        console.log(post);
        let res=[];
        for(var i=0;i<nums.length;i++) {
            res[i] = pre[i] * post[i];
        }
        return res;
    }
}
