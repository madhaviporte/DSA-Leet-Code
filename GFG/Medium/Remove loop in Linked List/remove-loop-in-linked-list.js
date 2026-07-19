/**
 * @param {Node} head
 */

/* Structure of linked list Node
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/
class Solution {
    removeLoop(head) {
        // code here
        if (!head || !head.next) return;

        let slow = head;
        let fast = head;

        // Detect cycle
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        // No loop
        if (!fast || !fast.next) return;

        // Find starting node of loop
        slow = head;

        if (slow === fast) {
            // Loop starts at head
            while (fast.next !== slow) {
                fast = fast.next;
            }
            fast.next = null;
            return;
        }

        while (slow.next !== fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        // Remove loop
        fast.next = null;
    }
}