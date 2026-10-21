class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var max = 0;
        var l=0;
        var r=heights.length -1;
        while(l < r) {
            var area = (r-l) * Math.min(heights[l], heights[r]);
            if(area > max){
                max = area;
            }
            if(heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }
        }
        return max;
    }
}
