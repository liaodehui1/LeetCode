# 199. 二叉树的右视图
两种情况：
1. 右子树高度 >= 左子树高度，只需要遍历右子树
2. 左子树高度 > 右子树高度，还需遍历左子树高出部分

注意：
1. 遍历`优先走右子树`，走完右子树还需遍历左子树以防`此时的`左子树还是高于此时的右子树