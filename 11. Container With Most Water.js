/**
 * 11. Container With Most Water
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 */

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0 ;
    let right = height.length -1;

    while (left < right) {
        maxArea = Math.max(maxArea, ( right- left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;    
};

/**
 *1.Initialization:

maxArea = 0: Initializes a variable maxArea to store the maximum area found so far. This will be the return value of the function.
left = 0: Initializes a pointer left to the beginning of the height array (the leftmost line).
right = height.length - 1: Initializes a pointer right to the end of the height array (the rightmost line).

2.while loop:

while (left < right): The loop continues as long as the left pointer is less than the right pointer. This means there are still potential container combinations to explore.

3.Area Calculation:

maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));: This is the core of the algorithm. It calculates the area of the container formed by the lines at left and right and updates maxArea if the new area is larger.
(right - left): This calculates the width of the container (the distance between the two lines).
Math.min(height[left], height[right]): This determines the height of the container. The height is limited by the shorter of the two lines. Water can't be contained above the shorter line.
(right - left) * Math.min(height[left], height[right]): Calculates the area.
Math.max(maxArea, ...): Updates maxArea with the larger value between the current maxArea and the newly calculated area.

4.Pointer Movement:

if (height[left] < height[right]) { left++; } else { right--; }: This is the crucial optimization. The algorithm moves the pointer associated with the shorter line inward. Why?
If height[left] is smaller, moving right inward won't increase the area. The width would decrease, and the height is already limited by height[left]. Moving left might find a taller line, potentially increasing the area.
The same logic applies if height[right] is smaller. Moving left inward won't help; moving right is the better choice.
Return:

return maxArea;: After the loop finishes (when left and right meet), the function returns the maximum area found.
 */