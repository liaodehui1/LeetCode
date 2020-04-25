// 有环while无限循环
var hasCycle = function(head) {
  let map = new Map()
  let p = head
  while(p) {
    if (map.has(p)) {
      return true
    }else {
      map.set(p, '123') // 不是存p.val, p.val存在相同，但p为节点地址不会相同
    }
    p = p.next
  }
  return false 
};