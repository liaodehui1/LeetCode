var reverseWords = function(s) {
  // 正则匹配多个空格
  // 分割 -> 反转 -> 连接 -> 去除前后多余空格
  return s.split(/\s+/).reverse().join(' ').trim()
};

var reverseWords = function(s) {
  s = s.trim() // 两边去空
  let i = j = s.length, res = []
  while(j > 0) {
    while(i && s[i - 1] !== ' ') i -= 1; // 从后往前
    res.push(s.substring(i, j))
    while(i && s[i - 1] === ' ') i -= 1; // 跳过空格
    j = i
  }
  return res.join(' ')
};