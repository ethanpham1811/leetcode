const map = {
  I: {
    I: [1, 0],
    II: [2, 1],
    III: [3, 2],
    IV: [4, 1],
    IX: [9, 1]
  },
  X: {
    X: [10, 0],
    XX: [20, 1],
    XXX: [30, 2],
    XL: [40, 1],
    XC: [90, 1]
  },
  C: {
    C: [100, 0],
    CC: [200, 1],
    CCC: [300, 2],
    CD: [400, 1],
    CM: [900, 1]
  },
  V: {
    V: [5, 0]
  },
  L: {
    L: [50, 0]
  },
  D: {
    D: [500, 0]
  },
  M: {
    M: [1000, 0]
  }
}
const chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

const romantoInt = (x, latinMap, allowChar) => {
  let stop = false
  x.split('').forEach((el) => {
    if (!allowChar.includes(el)) {
      stop = true
      return
    }
  })

  if (stop) return
  let int = 0
  let skip = 0
  const clone = x

  for (let i = 0; i < x.length; i++) {
    if (skip > 0) {
      skip -= 1
      continue
    }

    let temp = 0
    const threeDigit = latinMap[clone[i]][clone.substring(i, i + 3)]
    const twoDigit = latinMap[clone[i]][clone.substring(i, i + 2)]
    const oneDigit = latinMap[clone[i]][clone[i]]

    if (threeDigit) {
      temp = threeDigit[0]
      skip = threeDigit[1]
    } else if (twoDigit) {
      temp = twoDigit[0]
      skip = twoDigit[1]
    } else {
      temp = oneDigit[0]
      skip = oneDigit[1]
    }
    int = int + temp
  }
  return int
}
console.log(romantoInt('XCL', map, chars))

/*
- loop through the string
- check current letter with map
- return value+skip from map
- continue if skip > 0
*/
