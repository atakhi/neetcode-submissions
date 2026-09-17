class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)
            return false;
        var arr = [];
        var arr2 = [];
        for(var i=0;i<26;i++) {
            arr[i]=0;
            arr2[i]=0;
        }
        for(var i=0;i<s.length;i++) {
            var index = (s[i].charCodeAt(0) - 97);
            arr[index] =  arr[index] + 1;
            index = (t[i].charCodeAt(0) - 97);
            arr2[index] = arr2[index] + 1;
        }
        return arr.join() == arr2.join();
    }
}
