/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    var string=new Array();
    
    for(var i=1;i<=n;i++){
        
        if(i%15==0){
            string.push("FizzBuzz");  
        }
         else if(i%3==0){
            string.push("Fizz");
             
        }
        
         else if(i%5==0){
            string.push("Buzz");    
        }
        
         else{
          string.push(i.toString());    
        }
        
         
    }
    
  return string;
};
