/**
* Problem: Minimum Stack
* Complexity: Medium
* Description: Design a stack class that supports the push, pop, top, and getMin operations.
*
*    MinStack() initializes the stack object.
*    void push(int val) pushes the element val onto the stack.
*    void pop() removes the element on the top of the stack.
*    int top() gets the top element of the stack.
*    int getMin() retrieves the minimum element in the stack.
*
* Each function should run in O(1)O(1) time.
* Approach: have another stack called minimum stack & maintain min value till then while inserting, just compare top with new incoming value while inserting. return top for getMin
* Test cases: 
* Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
* Output: [null,null,null,null,0,null,2,1]
*/


class MinStack {
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];    
    }

    push(val: number): void {
        this.stack.push(val);
        if(!this.minStack.length) {
            this.minStack.push(val);
        } else {
            this.minStack.push(Math.min(this.minStack[this.minStack.length-1], val));
        }
        
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length-1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length-1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
