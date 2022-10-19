var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  
     var    Sum = 0
      
    var    n= nums.length
        for(var l=0;l<=n-firstLen;l++){
       
           var  leftSum =0
            for(var k=l;k<l+firstLen;k++)
                 leftSum+=nums[k]
            
            for(var r=0;r<=n-secondLen;r++){
                if( l+firstLen-1<r || r+secondLen-1<l){
                  var  rightSum= 0

                    for(var k=r;k<r+secondLen;k++)
                       rightSum+=nums[k]

                    Sum = Math.max(Sum, leftSum+rightSum)
                    
                }
            }
        }
        return Sum
    

     }
