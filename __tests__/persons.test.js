const Persons = require('../categories/persons.js');

describe('persons Model', () => {

  let persons;

  beforeEach(() => {
    persons = new Persons();
  });

  it('sanitize() returns undefined with missing requirements', () => {
    const schema = persons.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(persons.sanitize(testRecord)).toBeUndefined();
  });

  it('Saves a person to the db file when you create', () => {
    let brandyn = {
      name: 'brandyn',
      height: 188,
      limbs: 4,
      eyes: 2,
    };
    persons.create(brandyn)
      .then(response => {
        console.log(response);
      })
      .catch(e => console.error);
  });

});