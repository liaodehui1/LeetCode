// 迭代(从前往后)
var reverseList = function(head) {
  // head为null
  if(!head || !head.next) return head
  let pre = head, cur = head.next
  pre.next = null
  while(cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};

// 递归(从后往前)
var reverseList = function(head) {
  // head不为空，head.next为空时找到新的头节点
  // 也避免了head为null或只有一个节点情况
  if(!head || !head.next) {
    return head
  }else {
    // head为4时，head.next为5时递归结束，newHead为5
    let newHead = reverseList(head.next)
    // 回溯阶段
    head.next.next = head // head为4
    head.next = null
    return newHead // 回溯头节点
  }
};