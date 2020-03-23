const createLinkedList = require('../../../utils')

// var addTwoNumbers = function(l1, l2) {
//   let head = l1, p = l1, q = l2, r = 0, k
//   while(p && q) {
//     p = p.next
//     q = q.next
//   }
//   // length: p < q
//   if (!p && q) {
//     head = l2
//     p = l2
//     q = l1
//   }else {
//     p = l1
//     q = l2
//   }
//   while(p && q) {
//     p.val = p.val + q.val + r
//     if (p.val >= 10) { // 进位
//       p.val -= 10
//       r = 1
//     }else {
//       r = 0
//     }
//     k = p // p的前一位
//     p = p.next
//     q = q.next
//   }
//   while(p) {
//     p.val = p.val + r
//     if (p.val >= 10) {
//       p.val -= 10
//       r = 1
//     }else {
//       r = 0
//     }
//     k = p
//     p = p.next
//   }
//   if (r === 1) { // [5] [5]
//     k.next = new ListNode(1)
//   }
//   return head
// };

// 少一重循环
// var addTwoNumbers = function(l1, l2) {
//   let head = l1, p = l1, q = l2, r = 0, k
//   while(p && q) {
//     p.val = p.val + q.val + r
//     if (p.val >= 10) { // 进位
//       p.val -= 10
//       r = 1
//     }else {
//       r = 0
//     }
//     k = p
//     p = p.next
//     q = q.next
//   }
//   if (q) { // length: p < q
//     p = q // p 切换到q上
//     k.next = q // 衔接上
//   }
//   while(p) {
//     p.val = p.val + r
//     if (p.val >= 10) {
//       p.val -= 10
//       r = 1
//     }else {
//       r = 0
//     }
//     k = p
//     p = p.next
//   }
//   // 最后需要进位1
//   if (r === 1) { // [5] [5]
//     k.next = new ListNode(1)
//   }
//   return head
// };

// 创建新链表
// 空间复杂度O(max(m, n))
var addTwoNumbers = function(l1, l2) {
  let p = l1, q = l2, r = 0, head = new ListNode(0), root = head
  while(p || q || r) {
    let pVal = p ? p.val : 0
    let qVal = q ? q.val : 0
    let sum = pVal + qVal + r
    r = Math.floor(sum / 10) // 不能直接除，会有小数
    head.next = new ListNode(sum % 10) // 后移一位
    head = head.next
    p = p ? p.next : null
    q = q ? q.next : null
  }
  return root.next // 第二位开始
};

let l1 = createLinkedList([2,4,5,9])
let l2 = createLinkedList([5,6,4])
console.log(addTwoNumbers(l1, l2))