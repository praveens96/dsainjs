/**
* Problem: Car fleet - There are n cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers position and speed, both of length n.

    position[i] is the position of the ith car (in miles)
    speed[i] is the speed of the ith car (in miles per hour)

The destination is at position target miles.

A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of different car fleets that will arrive at the destination
* Test cases: Input: target = 10, position = [1,4], speed = [3,2], Output: 1
Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1], Output: 3

* Approach: sort the positions & calculate time it takes to reach target. then loop over sorted pairs and push each and pop when there is a greater element in stock top meaning a higher temp found.
final stack length gives no of fleets. 
*
*/

function carFleet(target: number, position: number[], speed: number[]): number {
    let pairs = position.map((p,i) => [p, speed[i]]);

    pairs.sort((a,b) => b[0]-a[0]);
    let stack = [];
    for(const [p,s] of pairs) {
        stack.push((target-p)/s);
        const n = stack.length;
        if(n >=2 && stack[n-1] <= stack[n-2]) {
            stack.pop();
        }
    }
    return stack.length;
};
