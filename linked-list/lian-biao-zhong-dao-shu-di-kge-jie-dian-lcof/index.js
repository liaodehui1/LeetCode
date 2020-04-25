// var getKthFromEnd = function(head, k) {
//   let p = head, count = 0
//   while(p) {
//     count++
//     p = p.next
//   }
//   p = head, cur = 0
//   while(p) {
//     cur++
//     if(cur === count - k + 1) return p
//     p = p.next
//   }
// };

var getKthFromEnd = function(head, k) {
  let cur = head, count = 1
  while(count !== k) { // pre与cur相差k个
    count++
    cur = cur.next
  }
  let pre = head
  while(cur.next) {
    pre = pre.next
    cur = cur.next
  }
  return pre
};