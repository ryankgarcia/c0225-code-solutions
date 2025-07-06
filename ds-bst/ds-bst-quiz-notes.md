# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.

it is a data structure that holds data in a 'tree', with special rules that allow for quick search and retrieval

- What are some examples of when you would use a Binary Search Tree?

to be able to sort through the order of elements and retrieve them quickly
if you want to have your data in a sorted order (numerically or alphabetically)

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?

by following the binary search algorithm, then repeat until the value is found, if not the search ends without finding a value. Its time complexity is a logarithmic of the number of elements in the node.

- How do you add an element into a Binary Search Tree? What is its time complexity?

you traverse the tree until you find the node where it is going to do, then insert at that location
Its time complexity is a logarithmic

- How do you remove an element from a Binary Search Tree? What is its time complexity?

Its time complexity is a logarithmic

## Notes

What is the difference between Infinity vs. -Infinity?

In a binary search tree, you don't modify values. You would remove it then insert the new item as a child.

In a BST, each node can have at most two children (which means binary).

The nodes are ordered such that every element in the left subtree of ANY given node must be LESS THAN the current node.

Every element in the right subtree of a given node must be greater than the current node.

The binary search algorithm is recursive, and the recursive algorithm works by eliminating half of the remaining values from consideration on each step.
