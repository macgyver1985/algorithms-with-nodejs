const MANY = 'many';
const ATTR_POS = 1;
const ADD_REMOVE_POS = -1;

function readData(schema, facts) {
    const result = {};
    const schemaDict = {};
    for (const s of schema) {
        schemaDict[s[0]] = s[s.length - 1] === MANY;
    }

    for (const fact of facts) {
        const _many = schemaDict[fact[ATTR_POS]];
        const _add = fact[ADD_REMOVE_POS];
        const key = fact.slice(0, 2);
        let modifiedFact = fact.slice(0, ADD_REMOVE_POS);
        if (!_add && !_many) {
            modifiedFact.push(true);
        } else {
            modifiedFact = fact;
        }

        const data = result[key] || [];
        if (_add) {
            if (_many) {
                data.push(modifiedFact);
            } else {
                data = [modifiedFact];
            }
        } else {
            const index = data.findIndex((f) => f.toString() === modifiedFact.toString());
            if (index !== -1) {
                data.splice(index, 1);
            }
        }

        result[key] = data;
    }

    const flat = Object.values(result).flat();
    return new Set(flat);
}

module.exports = { readData }
