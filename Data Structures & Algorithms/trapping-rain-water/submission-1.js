class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        
        var res = 0;
        var maxl = Array(height.length).fill(0);
        var maxr = Array(height.length).fill(0);
        maxl[0] = height[0];
        for(var i=1;i<height.length;i++) {
            maxl[i] = Math.max(maxl[i-1], height[i]);
        }
        maxr[height.length - 1] = height[height.length - 1];
        for(var i=height.length - 2;i>=0;i--) {
            maxr[i] = Math.max(maxr[i+1], height[i]);
        }
        for(var i=0;i<height.length;i++){ 
            res += Math.min(maxl[i], maxr[i]) - height[i];
        }
        return res;
    }
}
