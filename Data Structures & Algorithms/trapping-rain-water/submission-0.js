class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        var l=0;
        var r=height.length-1;
        var lmax = height[l];
        var rmax = height[r];
        var res = 0;
        while(l<r) {
            if(lmax < rmax) {
                l++;
                lmax = Math.max(lmax, height[l]);
                res += lmax - height[l];
            } else {
                r--;
                rmax = Math.max(rmax, height[r]);
                res += rmax - height[r];
            }
        }
        return res;
    }
}
