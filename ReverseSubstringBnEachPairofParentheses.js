

var reverseParentheses = function(s) {
    var stack=[];
    for(var i=0;i<s.length;i++){
        if(s[i]==")"){
            var arr=[];
            
          do{
          var temp= stack.pop();
          if(temp!="("){
          arr.push(temp);}

        } 
          while(temp!="(" );

         stack=stack.concat(arr);
         console.log(stack,arr);
        }
          else
           stack.push(s[i]);
        

    }

return stack.join("");
};
