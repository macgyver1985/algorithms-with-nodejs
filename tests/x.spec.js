const algorithm = require('../src/x');

test('Test x.', () => {
    const facts = [
        ['gabriel', 'endereço', 'av rio branco, 109', true],
        ['joão', 'endereço', 'rua alice, 10', true],
        ['joão', 'endereço', 'rua bob, 88', true],
        ['joão', 'telefone', '234-5678', true],
        ['joão', 'telefone', '91234-5555', true],
        ['joão', 'telefone', '234-5678', false],
        ['gabriel', 'telefone', '98888-1111', true],
        ['gabriel', 'telefone', '56789-1010', true],
    ];

    const schema = [
        ['endereço', 'cardinality', 'one'],
        ['telefone', 'cardinality', 'many'],
    ];

    const expected = new Set([
        ['gabriel', 'endereço', 'av rio branco, 109', true],
        ['joão', 'endereço', 'rua bob, 88', true],
        ['joão', 'telefone', '91234-5555', true],
        ['gabriel', 'telefone', '98888-1111', true],
        ['gabriel', 'telefone', '56789-1010', true],
    ]);

    expect(algorithm.readData(schema, facts)).toEqual(expected);
})