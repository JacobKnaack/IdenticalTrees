# IdenticalTrees

Code Challenge: Determine if 2 trees are identical

> Write a function to determine if two trees are identical or not.

## Example Inputs and Outputs

### Case 1: 2 Identical Trees

Input:

```text
        1                   1
      /   \               /   \
    2      3            2      3
  /                    /
4                    4
```

Output: True

---

### Case 2: Different Trees

Input:

```text
        1              1
      /   \          /   \
    2      3       5      3
          /       /
        4        4
```

Output: False

## Algorithm

* Check if trees are empty -> if so stop.
* Else if trees are not empty:
  * Check that the values in the current nodes matches
    * if data does not match return false
  * recursively check the left side.
  * recursively check the right side.
* Continue until all nodes are compared, return true if no mismatches are found.
