/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {

        if (root === null) return [];

        let queue=[root];
        let next_queue=[];
        let result=[];

        while (queue.length){
            let i=0;
            while (i<queue.length){
                let node=queue[i];
                if (node.left) next_queue.push(node.left)
                if (node.right) next_queue.push(node.right)
                i++;
            }

            result.push(queue[i-1].val);

            queue=next_queue;
            next_queue=[];
        }

        return result;



    }
}
