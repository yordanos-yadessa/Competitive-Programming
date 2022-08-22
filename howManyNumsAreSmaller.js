/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var count=[];
    var counter;
    var n=nums.length;
     for(var i=0;i<n;i++){
         counter=0;
         for(var j=0;j<n;j++){
             
             if(nums[j]<nums[i])
                 counter++;
             
         }
         count[i]=counter;
         
     }
    return count;
};
