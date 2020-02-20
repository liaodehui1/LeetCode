# 236. 二叉树的最近公共祖先
三种情况：  
1. left = 1; mid = 1
   p(q) <- node
  /
 q(p)
2. right = 1; mid = 1
   p(q) <- node
   \
    q(p)
3. left = 1; right = 1
    node
    /  \
  p(q)  q(p)