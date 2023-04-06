const algorithm = require('../src/two-sum');

test('Given a array of numbers and a target value, should be returned the indexes of the numbers that the sum is same the target value.', () => {
    expect(algorithm.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(algorithm.twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
    expect(algorithm.twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
    expect(algorithm.twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
    expect(algorithm.twoSum([2, 7, 11, 15], 50)).toEqual([]);
})
