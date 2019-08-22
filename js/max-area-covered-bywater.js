/**
 * @param {number[]} height
 * @return {number}
 * 
 *  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
    Note: You may not slant the container and n is at least 2.
 */
var maxAreaBruteForce = function(height) {
    let max = 0;
    for(let i=0;i<height.length;++i) {
        for(let j=i+1;j<height.length;++j) {
            let tm = (j-i) * Math.min(height[i], height[j]);
            if(tm > max) max = tm;
        }
    }
    return max;
};
var maxArea = function(height) {
    let max = 0;
    let l=0, r=height.length-1;
    while(l<r) {
        max = Math.max(Math.min(height[l], height[r]) * (r-l), max);
        if(height[l] < height[r]) l++;
        else r--;
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));