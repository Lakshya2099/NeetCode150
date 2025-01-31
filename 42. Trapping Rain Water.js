/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9  
 */

var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }

    return water;    
};

/**
 * 1.Initialization:

left = 0: Pointer to the leftmost bar.
right = height.length - 1: Pointer to the rightmost bar.
leftMax = height[left]: Stores the maximum height encountered so far from the left side.
rightMax = height[right]: Stores the maximum height encountered so far from the right side.
water = 0: Stores the total amount of trapped water.

2.while loop:

while (left < right): The loop continues as long as the left pointer is less than the right pointer.

3.Water Calculation and Pointer Movement:

if (leftMax < rightMax):  This condition checks if the maximum height encountered from the left side is less than the maximum height from the right side.

left++: If leftMax is smaller, it means the current bar at left is bounded by leftMax on the left and potentially by rightMax (or some other bar) on the right. We move the left pointer one step to the right.
leftMax = Math.max(leftMax, height[left]): Update leftMax if the current bar's height is greater.
water += leftMax - height[left]: This is the key calculation. The amount of water trapped above the current bar is the difference between leftMax (the limiting height on the left) and the current bar's height (height[left]). We add this to the total water. We're essentially filling water up to the level of the smaller of leftMax and rightMax. Since leftMax is smaller in this if block, it determines the water level.
else: (If rightMax <= leftMax)

right--: If rightMax is smaller or equal to leftMax, we move the right pointer one step to the left.
rightMax = Math.max(rightMax, height[right]): Update rightMax if the current bar's height is greater.
water += rightMax - height[right]: Similar to the if block, we calculate the water trapped above the current bar, but this time using rightMax as the limiting height.

4.Return:

return water: After the loop finishes, the function returns the total calculated water.


 */