// Read https://tech-docs.corndel.com/js/arrays.html first!

/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(nums) {
  // TODO
  const firstElement = nums[0]
  const lastElement = nums[nums.length - 1]
  return firstElement + lastElement    
}
