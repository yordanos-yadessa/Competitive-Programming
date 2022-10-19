/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var count=0;
   var leng= nums.length;
    var prefixsum=new Array(leng);
    prefixsum[0]=nums[0];
    for(var i=1;i<leng;i++){
        prefixsum[i]=prefixsum[i-1]+nums[i];
    }
     for(var i=0;i<leng;i++){
        var num1=prefixsum[i]-nums[i];
        var num2=prefixsum[leng-1]-prefixsum[i];
        if(num1==num2){
            var result=i;
            count++;
            break;
            
        }
        
    }
if(count==0){
    return -1;
}
return result;

};
