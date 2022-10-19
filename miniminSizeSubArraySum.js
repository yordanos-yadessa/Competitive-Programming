

var minSubArrayLen = function(target, nums) {
var min=0;
var sum=0;
var count=0;
var i=0;

while(i<nums.length){
    sum+=nums[i];
    count++;
    if(sum>=target){
        break;
    }
    i++;
     
}
 if(sum>=target){
    min=count;
 }
  


  for(var j=1;j<nums.length;j++){
     
          sum=0;
          count=0;

  for( i=j;i<nums.length;i++){
      sum+=nums[i];
      count++;
 
       if(sum>=target){
        break;
       }
   
        }

        if(min>=count && sum>=target){
   
            min=count;
        }

        
    }
return min;
    
}


