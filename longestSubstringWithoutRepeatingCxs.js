
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

 var max=0;

for(var i=0;i<s.length;i++){
var arr=[]
var j=i;

while(!arr.includes(s[j])&&j<s.length){

    arr.push(s[j])
j++;

}
   if(max<arr.length){
    max=arr.length;
   }  
    }
    return max;

}
