class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }
        var arr = Array(26).fill(0);
        var arr2 = Array(26).fill(0);
        for(var ch of s) {
            arr[ch.charCodeAt(0) - 97]++;
        }
        console.log(arr);
        for(var ch of t) {
            arr2[ch.charCodeAt(0) - 97]++;
        }
        console.log(arr2);
        return arr.toString() == arr2.toString();
    }
}
