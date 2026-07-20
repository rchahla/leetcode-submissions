// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();

        map.set(null,null);

        let cur = head;

        while (cur){
            let copy = new Node(cur.val);
            map.set(cur,copy);
            cur = cur.next;
        }

        cur = head;

        while (cur){
            let copy = map.get(cur);
            copy.next = map.get(cur.next);
            copy.random = map.get(cur.random);
            cur = cur.next
        }

        return map.get(head);




    }
}
