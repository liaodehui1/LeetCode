// 无头结点，也就不能找到要删除节点的前一个节点了
// 通过删除要删除节点的后一个节点，删除之前先交换两者数值
var deleteNode = function(node) {
    let next = node.next
    node.val = next.val
    node.next = next.next
    next.next = null
};