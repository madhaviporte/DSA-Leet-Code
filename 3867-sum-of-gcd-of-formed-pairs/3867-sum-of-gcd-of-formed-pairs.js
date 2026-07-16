/**
 * @param {number[]} nums
 * @return {number}
 */

 function gcd(x,y){
    if(y===0)return x;
    return gcd(y,x%y)
    }
var gcdSum = function(nums) {
    let n=nums.length;
    let pre=new Array(n);
    let mx=-Infinity;
    for(let i=0;i<nums.length;i++){
        mx=Math.max(mx,nums[i]);
        pre[i]=gcd(nums[i],mx);
    }pre.sort((a,b)=>a-b);
    let ans=0;
    for(let i=0;i<Math.floor(n/2);i++){
        ans+=gcd(pre[i],pre[n-i-1])
    }return ans
};