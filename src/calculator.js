function add(numbers) {
  if (numbers === "") return 0;

  const nums = numbers.split(",");
  if (nums.length === 1) return parseInt(nums[0]);
  if (nums.length === 2) return parseInt(nums[0]) + parseInt(nums[1]);
}

module.exports = add;
