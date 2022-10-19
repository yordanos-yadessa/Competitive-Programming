
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    var left=0;
    var right=tokens.length-1;
    var max=0;
    var score=0;
tokens=tokens.sort(function(a,b){return a-b})
    for (let i = 0; i < tokens.length; i++) {
      if(power>=tokens[left]){
            power=power-tokens[left];
            score++;
            if (score>max) {
                max=score;
            }
                    left++;
      }else if(power<tokens[right] && score>0)
         {
            score--;
            power=tokens[right]+power;
            right--;
              if (score>max) {
                max=score;
            }
         }

        
    }
    return max;
};
