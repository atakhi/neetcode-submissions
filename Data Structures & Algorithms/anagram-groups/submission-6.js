class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var mp={};
        let arr = [];
        for(var str of strs) {
            for(var i=0;i<26;i++){
                arr[i] = 0;
            }
            for(var ch of str) {
                var ind = ch.charCodeAt(0) - 97;
                arr[ind]++;
            }
            let k = arr.toString();
            if(mp[k] == undefined) {
                mp[k] = [];
            }
            mp[k].push(str);
        }
        return Object.values(mp);
    }
}
