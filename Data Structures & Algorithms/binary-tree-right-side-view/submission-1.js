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
            if (queue.length === 1) result.push(queue[0].val);
            if (queue.length > 1) result.push(queue[queue.length - 1].val);

            for (let i=0;i<queue.length;i++){
                let node=queue[i];
                if (node.left) next_queue.push(node.left)
                if (node.right) next_queue.push(node.right)
            }

            queue=next_queue;
            next_queue=[];
        }

        return result;



    }
}
