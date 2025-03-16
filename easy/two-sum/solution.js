export function twoSum(nums, target) {
	const stack = new Map()
	const result = []

	for (let i = 0; i < nums.length; i++) {
		if (!stack.size) {
			stack.set(nums[i], i)
			continue
		}

		const findedItem = stack.get(target - nums[i])

		if (findedItem !== undefined) {
			result.push(findedItem, i)
			break
		}

		stack.set(nums[i], i)
	}

	return result
};