// var getIntersectionNode = function(headA, headB) {
//     let p = headA
//     while(p) {
//       let q = headB
//       while(q) {
//         if(q === p) return q
//         q = q.next
//       }
//       p = p.next
//     }
//     return null
// };

var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB
    while(p && q) {
      if(p === q) return p
      if(!p.next && !q.next) return null // 走完L1 + L2 + 2 * C
      // 走到最后走对方路，这样走到共同节点时，两者走的步数相同
      p = p.next ? p.next : headB
      q = q.next ? q.next : headA
    }
};