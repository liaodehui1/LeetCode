# 排序
![排序](./images/sort.webp)

## 冒泡排序
1. i从0到(length - 1)
2. exchange记录是否有交换，用于优化
3. j从0到(length - i)
- 每次比较i和(i + 1)，判断是否需要交换
4. 内部循环结束，通过exchange判断是否已排序，排好则退出

## 选择排序
1. i从0到(length - 1)
2. minIndex记录最小数位置
3. j从i + 1到(length - 1)
- 每次找出未排好序中的最小数位置
4. 判断最小数位置是否为i，不是则需要交换

![selectionSort](./images/selectionSort.jpg)
选择排序是不稳定的：(7) 2 5 9 3 4 [7] 1

## 插入排序
1. i从0到(length - 1)
2. j从i到0
- 寻找j应该处于已排序序列中的位置：每次比较j和(j - 1)，直到(j - 1)位置数 < j位置数退出

## 归并排序(分治法)
1. 递归，拆分数组
2. 对左右子数组排序合并，回溯

## 快速排序
1. 定基点pivot(左侧/右侧)
2. i从0开始，j从(pivot - 1)开始，开始确定基点应该在的位置
3. 判断i位置数是否大于基点数，大于则与j位置数交换(放到右侧)，该数已确定j--；否则i++
4. i === j 退出循环,一轮下来确定好了基点应该在的位置，同时分好了大于基点和小于基点两部分
- 可能一直是i++,最后j === pivot - 1，此时需要判断j位置数是否大于pivot位置数，大于才交换
- j < pivot - 1，也交换
5. 递归排序小于基点部分和大于基点部分(不需要包含基点了)