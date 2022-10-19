/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
piles.sort(function(a,b){return a-b});
  var sum=0;
  var n=piles.length/3;
  for(var i=0;i<n;i++){
    piles.shift();
     piles.pop();
    sum=sum+piles.pop();  
   
    
   
  }
  return sum;
};
