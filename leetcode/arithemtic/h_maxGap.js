/* https://leetcode.com/problems/maximum-gap/
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
  let bucketSize = Math.max(1, Math.ceil((max - min) / (nums.length - 1)))
  let buckets = {}
  console.log('bucket size: ' + bucketSize)

  for (const element of nums) {
    let bucketId = Math.floor((element - min) / bucketSize)
    buckets[bucketId] = {
      min: Math.min(element, buckets[bucketId] ? buckets[bucketId].min : Infinity),
      max: Math.max(element, buckets[bucketId] ? buckets[bucketId].max : -Infinity)
    }
  }
  console.log(buckets)
  let prevBucketMax = min
  let maxGap = 0
  Object.values(buckets).forEach((b) => {
    maxGap = Math.max(maxGap, b.min - prevBucketMax)
    prevBucketMax = b.max
  })

  return maxGap
}
// console.log(maximumGap([3, 7, 8, 13]))
console.log(maximumGap([8, 7, 23, 53]))
