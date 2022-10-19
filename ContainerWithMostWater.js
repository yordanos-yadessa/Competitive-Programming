 var maxArea = function(height) {
  var l=0;
  var r=height.length-1;
  var area=0
    for(var i=0; i<height.length;i++){
      if(height[l]<height[r]){
        var result=height[l]*(r-l)
          if(result>area)
            area=result;
            l++;
      }
      if(height[l]>=height[r]){
        var result=height[r]*(r-l)
        if(result>area)
          area=result;
          r--;

    }

  };
  return area;
 }
