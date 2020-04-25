var deleteNode = function(head, val) {
  if(head.val === val) return head.next
  let pre = head, cur = head.next
  while(cur) {
    if(cur.val === val) {
      pre.next = cur.next
      break
    }else {
      pre = cur
      cur = cur.next
    }
  }
  return head
};