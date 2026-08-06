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
     * @return {number}
     */
    goodNodes(root) {

        let good = 0;

        function dfs(node,check){
            if (node.val >=check) good++;
            if (node.left) dfs(node.left,Math.max(check,node.val));
            if (node.right) dfs(node.right,Math.max(check,node.val));
        }
        dfs(root,root.val);
        return good;
    }
};