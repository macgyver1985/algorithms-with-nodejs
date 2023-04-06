const algorithm = require('../src/add-two-numbers');

test('Given two list of numbers, should be returned a new list with the sum´s result of both lists.', () => {
    expect(algorithm
        .addTwoNumbers({
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3
                }
            }
        }, {
            val: 5,
            next: {
                val: 6,
                next: {
                    val: 4
                }
            }
        }))
        .toEqual({
            val: 7,
            next: {
                val: 0,
                next: {
                    val: 8,
                    next: null
                }
            }
        });

    expect(algorithm
        .addTwoNumbers({
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3
                }
            }
        }, {
            val: 5,
            next: {
                val: 6
            }
        }))
        .toEqual({
            val: 7,
            next: {
                val: 0,
                next: {
                    val: 4,
                    next: null
                }
            }
        });

    expect(algorithm
        .addTwoNumbers({
            val: 5,
            next: {
                val: 6
            }
        }, {
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3
                }
            }
        }))
        .toEqual({
            val: 7,
            next: {
                val: 0,
                next: {
                    val: 4,
                    next: null
                }
            }
        });

    expect(algorithm
        .addTwoNumbers({
            val: 5,
            next: {
                val: 6
            }
        }, {
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3,
                    next: {
                        val:9,
                        next: {
                            val: 9
                        }
                    }
                }
            }
        }))
        .toEqual({
            val: 7,
            next: {
                val: 0,
                next: {
                    val: 4,
                    next: {
                        val: 9,
                        next: {
                            val: 9,
                            next: null
                        }
                    }
                }
            }
        });
})
