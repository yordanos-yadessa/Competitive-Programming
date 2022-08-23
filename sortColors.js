/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var num=[];
        var n=nums.length;
        var blue=0,red=0,white=0;
        for(var i=0;i<n;i++){
            if(nums[i]==0)
                red++;
            else if(nums[i]==1)
            white++;
            else 
                blue++;
        }
    for(i=0;i<red;i++){
    num.push(0);
    }
    for(i=0;i<white;i++){
    num.push(1);
    }
    for(i=0;i<blue;i++){
    num.push(2);
    }
    return num;
};
