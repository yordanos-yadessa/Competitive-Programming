
var longestOnes = function(nums, k) {
  var max=0;
 ;
var flip=k;

    for(var i=0;i<nums.length;i++){

    flip=k;
   var count=0
        for(var j=i;j<nums.length;j++){
    if(nums[j]==0 && flip>0){
        flip--;
        count++;
    }
    else if(nums[j]==1){
        count++;
    }
    else if(nums[j]==0 && flip==0){
        break;
    }

        }

       if(max<count){
        max=count;
       }
    
}
    
return max;
};
