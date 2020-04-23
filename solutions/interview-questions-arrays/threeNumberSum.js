function threeNumberSum(array, targetSum = 0) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1, right = array.length - 1;
    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum > targetSum) {
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++; right--;
      }
    }
  }
  return triplets;
}