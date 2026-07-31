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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @param {TreeNode} nodeP
     * @param {TreeNode} nodeQ
     * @return {boolean}
     */
    isSameTree(p, q) {

        function dfs(nodeP, nodeQ){
            if (!nodeP && !nodeQ) return true;
            if ((!nodeP || !nodeQ) ||nodeP.val !== nodeQ.val ) return false;

            return dfs(nodeP.left, nodeQ.left) && dfs(nodeP.right, nodeQ.right)

        }

        return dfs(p,q);


    }
}
