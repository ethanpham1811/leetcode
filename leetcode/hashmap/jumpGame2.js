/* https://leetcode.com/problems/jump-game-ii/
  hash map solution
*/
const jump = function (nums) {
  const len = nums.length
  const map = new Map()
  for (let i = len - 2; i >= 0; i--) {
    const steps = []
    let p = 1
    while (p <= nums[i]) {
      steps.push(map.get(i + p) || 0)
      p++
    }
    map.set(i, 1 + Math.min(steps))
    console.log(map)
  }
  return map.get(0)
}
console.log(jump([2, 3, 1, 1, 4]))

/* better solution
class Solution {
public:

    int jump(vector<int>& nums) {

      for(int i = 1; i < nums.size(); i++)
      {
        nums[i] = max(nums[i] + i, nums[i-1]);
      }

      int ind = 0;
      int ans = 0;

      while(ind < nums.size() - 1)
      {
        ans++;
        ind = nums[ind];
      }

      return ans;
    }
}; */
