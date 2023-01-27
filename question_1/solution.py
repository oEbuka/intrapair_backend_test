class TreeNode:
    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = right
        self.count = 1
        self.left_count = 0

def insert(node, val, count):
    if node is None:
        return TreeNode(val), count
    if val == node.val:
        node.count += 1
        return node, count + node.left_count
    if val < node.val:
        node.left_count += 1
        node.left, count = insert(node.left, val, count)
    else:
        count += node.left_count + node.count
        node.right, count = insert(node.right, val, count)
    return node, count

def smaller_elements_to_right(arr):
    root = None
    result = []
    for i in range(len(arr) - 1, -1, -1):
        root, count = insert(root, arr[i], 0)
        result.append(count)
    return result[::-1]

