const parseQuery = require('../src/queryParser');

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});


test('Parse SQL Query', () => {
  const query = 'SELECT employee-id, name FROM sample';
  const parsed = parseQuery(query);
  expect(parsed).toEqual({
      fields: ['employee-id', 'name'],
      table: 'sample'
  });
});