function worker (A, B) {
  if (!B) return true; // B为null
  if (!A) return false; // B非null,而A为null
  if (A.val === B.val) { // 在A中找到B头节点
    // 找到后开始遍历B
    return compare(A.left, B.left) && compare(A.right, B.right)
  }
  // 没找到继续找
  if (worker(A.left, B) || worker(A.right, B)) {
    return true
  }
  return false
}

function compare (A, B) {
  if (!B) return true;
  if (!A) return false;
  if (A.val !== B.val) return false;
  return compare(A.left, B.left) && compare(A.right, B.right)
}

var isSubStructure = function(A, B) {
  // [1] []
  // [] []
  // [] [1]
  if (!A || !B) return false; 
  return worker(A, B)
}