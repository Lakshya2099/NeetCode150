/**
 * 155. Min Stack
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 */
var MinStack = function() {
  this.st = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  let min_val = this.getMin();
  if (min_val === null || min_val > val) {
    min_val = val;
  }
  this.st.push([val, min_val]);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.st.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.st.length ? this.st[this.st.length - 1][0] : null;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.st.length ? this.st[this.st.length - 1][1] : null;
};


/**
 * 1.var MinStack = function() { this.st = []; };:

This defines the MinStack constructor.
this.st = []; initializes an empty array st which will be used to store the stack elements. Crucially, it won't just store the values, but pairs of [value, minimum_so_far].

2.MinStack.prototype.push = function(val) { ... };:

This is the push method. It takes a value val as input and adds it to the stack.
let min_val = this.getMin(); retrieves the current minimum value from the stack.
if (min_val === null || min_val > val) { min_val = val; } checks if the new value val is smaller than the current minimum. If it is, the new minimum becomes val. Otherwise, the current minimum remains the same.
this.st.push([val, min_val]); pushes an array [val, min_val] onto the stack. This is the key to the O(1) getMin(): for each element, we store the minimum value up to that point in the stack.

3.MinStack.prototype.pop = function() { this.st.pop(); };:

This is the pop method. It removes the top element from the stack. Because of how we store elements (as [val, min_val] pairs), a regular pop() suffices.

4.MinStack.prototype.top = function() { return this.st.length ? this.st[this.st.length - 1][0] : null; };:

This is the top method. It returns the top element of the stack without removing it.
this.st.length ? ... : null handles the case where the stack is empty.
this.st[this.st.length - 1][0] accesses the last element (the top) of the stack and then accesses the first element of that pair which is the actual value.

5.MinStack.prototype.getMin = function() { return this.st.length ? this.st[this.st.length - 1][1] : null; };:

This is the getMin method. It returns the minimum element in the stack in O(1) time.
this.st.length ? ... : null handles the empty stack case.
this.st[this.st.length - 1][1] accesses the last element (the top) of the stack, and then accesses the second element of that pair which is the minimum value at that point in the stack's history. Because we store the minimum-so-far with each element, the minimum at the top of the stack is the overall minimum.
 */