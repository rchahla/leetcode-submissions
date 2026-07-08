/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        let map = new Map();

        let curr = head;


        while (curr !== null){


            if (!map.has(curr.val)){
                map.set(curr.val,getIndex(head,curr))
            } else {
                if (map.get(curr.val) === getIndex(head,curr)) return true


            }

            curr = curr.next;





        }

        return false;




    }

}

function getIndex(head, target){
        let index=0;

        let current = head;

        while (current !== null){

            if (current === target) return index;

            current = current.next;
            index++;
        }

        return -1;

    }
