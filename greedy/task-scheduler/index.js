var leastInterval = function(tasks, n) {
  let len = tasks.length
  let map = new Map()
  for(let i = 0; i < len; i++) {
    let taskName = tasks[i]
    if(!map.has(taskName)) {
      map.set(taskName, [1, 0])
    }else {
      map.get(taskName)[0]++
    }
  }
  // console.log(map)
  let count = len, res = 0
  while(count > 0) {
    let current
    map.forEach((task, key) => {
      if(task[0] > 0 && task[1] === 0) {
        if (!current || task[0] > map.get(current)[0]) {
          current = key
        }
      }else {
        task[1]--
      }
    })
    // console.log(current)
    if(current) {
      map.get(current)[0]--
      map.get(current)[1] = n
      count--
    }
    res++
  }
  return res
};

console.log(leastInterval(["A","A","A","B","B","B"], 2))