'use strict';

const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = categories.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(categories.sanitize(testRecord)).toBeUndefined();
  });

  //Hanna- Setup the sanitize test to test for type of value and return undefined

  it('sanitize() returns undefined if type of value does not match', () => {
    const schema = categories.schema;
    var testRecord = {};
    for(var field in schema) {
      if(typeof(testRecord[field] !== typeof(schema[field]))) {
        testRecord[field] = null;
      }
    }
    expect(Categories.sanitize(testRecord)).toBeUndefined();
  });



  it('can post() a new category', () => {
    let obj = { name: 'Test Category', };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category', };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  //Hanna- adding a delete test for the value
  it('can delete() a category', () => {
    let obj = {name: 'Test Category', };
    return categories.create(obj)
      .then( record => {
        return categories.delete(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]) !== (obj[key]);
            });
          });
      });
  });

});
