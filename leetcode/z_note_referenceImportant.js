/* object reference value alternating */
const list = {name: 'khoi', address: {name: 'hcm'}}
let p = list.address
console.log(list)
console.log(p)
p.name = 'hn'
console.log(list)
console.log(p)

/* Array reference value alternating */
const list2 = [1, 2, [3, 4], 5]
const newHead2 = list2
let p2 = newHead2[2]
p2[0] = 9
console.log(p2)
console.log(newHead2)
