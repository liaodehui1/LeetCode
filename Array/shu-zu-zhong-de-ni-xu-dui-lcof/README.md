# 面试题51. 数组中的逆序对
## 分治思想(归并排序)
lleft: [5, 6, 7], rright: [4, 5, 6]
|||||
--|--|--|--|  
5 > 4 | 入4 | res = [4] | result[0] = 0 |
5 == 5 | 入lleft的5 | res = [4, 5] | result[0] += (2 - 1) = 1 |
6 > 5 | 入5 | res = [4, 5, 5] | result[0] = 1 |
6 == 6 | 入左侧的6 | res = [4, 5, 5, 6] | result[0] += (4 - 2) = 3 |
7 > 6 | 入6 | res = [4, 5, 5, 6, 6] | result[0] = 3 |
7 | 入左侧的7 | res = [4, 5, 5, 6, 6, 7] | result[0] += (6 - 3) = 6 |