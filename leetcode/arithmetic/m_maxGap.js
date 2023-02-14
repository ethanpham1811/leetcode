/* https://leetcode.com/problems/maximum-gap/
Key: sort + O(n) = bucket 
  - Bucket sort & Pigeon hole principal
  - The max gap will never be smaller than the average gap (max-min)/(length-1)
  - every num will be distributed in baskets with size 16 [0,1,2,3..16],[17,18...32],....
  [8, 7, 23, 53]
  bucket {
    '0': { min: 7, max: 8 },
    '1': { min: 23, max: 23 },
    '2': { min: 53, max: 53 }
  }
 */
const maximumGap = function (nums) {
  let max = Math.max(...nums)
  let min = Math.min(...nums)
  let bucketSize = Math.max(1, Math.ceil((max - min) / nums.length))
  let buckets = {}
  console.log(bucketSize)
  // console.log('bucket size: ' + bucketSize)

  for (const element of nums) {
    let bucketId = Math.floor((element - min) / bucketSize)
    buckets[bucketId] = {
      min: Math.min(element, buckets[bucketId] ? buckets[bucketId].min : Infinity),
      max: Math.max(element, buckets[bucketId] ? buckets[bucketId].max : -Infinity)
    }
  }
  // console.log(buckets)
  let prevBucketMax = min
  let maxGap = 0
  Object.values(buckets).forEach((b) => {
    maxGap = Math.max(maxGap, b.min - prevBucketMax)
    prevBucketMax = b.max
  })

  return maxGap
}
console.log(maximumGap([0, 100, 3, 2, 1]))
console.log(maximumGap([40, 50, 45]))
console.log(maximumGap([1, 7, 23, 53]))

const maximumGap = function (nums) {
  if (nums.length < 2) return 0
  let maxGap = nums[1] > nums[0] ? nums[1] - nums[0] : 0

  for (let i = 2; i < nums.length; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1])
  }
  return maxGap
}
console.log(maximumGap([1, 100, 3, 2, 1]))
console.log(maximumGap([1, 7, 23, 53]))
