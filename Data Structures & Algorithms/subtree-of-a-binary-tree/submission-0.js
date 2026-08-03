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
     * @param {TreeNode} subRoot
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    sameTree(p,q){
        if (!p && !q) return true;
        if ((!p || !q)|| p.val !== q.val ) return false;

        return this.sameTree(p.left,q.left) && this.sameTree(p.right,q.right) 

    }

    isSubtree(root, subRoot) {
        if (subRoot === null) return true;
        if (root === null) return false;

        if (this.sameTree(root,subRoot)) return true;

        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot);

    }
}
