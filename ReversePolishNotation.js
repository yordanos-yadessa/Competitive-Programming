/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
     var stack=[];
    for(var i=0;i<tokens.length;i++){
       
               
            if(tokens[i]=="*"){
                var num1=stack.pop();
                var num2=stack.pop();
                var num3=num2*num1;
                stack.push(num3);
            }
            else if(tokens[i]=="/"){
                var num1=stack.pop();
                var num2=stack.pop();
                var num3=num2/num1;
                 if(num3>0)
               stack.push(Math.floor(num3));
               else
               stack.push(Math.ceil(num3));
            }
             else if(tokens[i]=="-"){
                var num1=stack.pop();
                var num2=stack.pop();
                var num3=num2-num1;
                stack.push(num3);

            }
             else if(tokens[i]=="+"){
                var num1=stack.pop();
                var num2=stack.pop();
                var num3=num2+num1;
                stack.push(num3);

            }
       
            else
            {
             var int=parseInt(tokens[i]);
                stack.push(int);

            }
        }
          
    
    return stack[0];
};
