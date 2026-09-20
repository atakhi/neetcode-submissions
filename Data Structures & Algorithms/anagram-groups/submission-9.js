class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var arr = Array(26).fill(0);
        var mp = {};
        for(var str of strs) {
            arr = Array(26).fill(0);
            for(var ch of str) {
                var ind = ch.charCodeAt(0) - 97;
                arr[ind] = arr[ind] + 1;
            }
            if(mp[arr.join(',')] == undefined) {
                mp[arr.join(',')] = [];
            }
            mp[arr.join(',')].push(str);
        }
        return Object.values(mp);
    }
}
