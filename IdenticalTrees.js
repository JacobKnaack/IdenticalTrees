'use strict';

// Check if trees are empty -> if so stop.
// Else if trees are not empty:
// Check that the values in the current nodes matches
// if data does not match return false
// recursively check the left side.
// recursively check the right side.
// Continue until all nodes are compared, return true if no mismatches are found.

// The function starts by checking the root nodes of the two trees.
// If the root nodes are equal, it then recursively checks the left and right subtrees.
// The recursion continues until it reaches leaf nodes or nodes with no children.
// At each level, it compares the values of corresponding nodes.
// If a mismatch is found at any level, the function returns false.
// If no mismatches are found at any level, the function eventually reaches the base case and returns true.

// Initializing a tree class, value, and also the left and right children
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areTreesIdentical(tree1, tree2) {
    // If both trees are empty, they are considered identical and will return true
    if (!tree1 && !tree2) {
        return true;
    }

    // If one tree is null and the other tree isn't, they are not considered identical and will return false
    // I understand this wasn't a basecase in the readme but I felt like I needed to add this for my own benefit.
    if (!tree1 || !tree2) {
        return false;
    }

    // If the values are the current nodes are not equal, will return false
    if (tree1.value !== tree2.value) {
        return false;
    }

    // Recursively check the left and right
    const leftSubtree = areTreesIdentical(tree1.left, tree2.left);
    const rightSubtree = areTreesIdentical(tree1.right, tree2.right);

    // Return true only if both subtrees are identical
    return leftSubtree && rightSubtree;
}

// Test Cases fromt Prompt

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.right.left = new TreeNode(4);

const tree4 = new TreeNode(1);
tree4.left = new TreeNode(5);
tree4.right = new TreeNode(3);
tree4.left.left = new TreeNode(4);

// Additional Test Cases

const tree5 = new TreeNode();
const tree6 = new TreeNode();

const tree7 = new TreeNode(1);
const tree8 = new TreeNode();

// Should return true
console.log(areTreesIdentical(tree1, tree2), tree1, tree2);
console.log(areTreesIdentical(tree5, tree6), tree5, tree6);

// Should return false
console.log(areTreesIdentical(tree3, tree4), tree3, tree4);
console.log(areTreesIdentical(tree7, tree8), tree7, tree8);