/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
   abcecbadbc
 */
var findAnagrams = function (s, p) {
   var result=[]
    var arr1=p.split("").sort()

  for (var i = 0; i < s.length; i++) { 
    var arr=[]
    for (var j = 0; j < p.length; j++) {
      if(s[i+j])
       arr.push(s[i+j])
    } 
   if(JSON.stringify(arr.sort())==JSON.stringify(arr1))
       result.push(i)
  }
return result;
};
