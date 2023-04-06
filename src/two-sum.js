function twoSum(nums, target) {
    const indice = new Map();

    for (let index = 0; index < nums.length; index++) {
        const rest = target - nums[index];

        if (indice.has(rest))
            return [indice.get(rest), index];

        indice.set(nums[index], index);
    }

    return [];
}

module.exports = { twoSum }
