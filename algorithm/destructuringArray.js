// 第一题
const targetArray = [1, [2, 3], 4]
const formater = "[a, [b, d], c]"
const formaterArray = ['a', ['b', 'd'], 'c']

const destructuringArray = (values, keys) => {
  try {
    const obj = {};
    if (typeof keys === 'string') {
      keys = JSON.parse(keys.replace(/\w+/g, '"$&"'))
    }
    
    const iterate = (values, keys) =>
      keys.forEach((key, i) => {
        if(Array.isArray(key)) iterate(values[i], key)
        else obj[key] = values[i]
      })
      
    iterate(values, keys)
    
    return obj;
  } catch (e) {
    console.error(e.message);
  }
}

const { expect } = require('chai')

describe('feature test', function() {
  it('should return right with formater', function() {
    expect(destructuringArray(targetArray, formater)).to.eql({
      a: 1,
      b: 2,
      d: 3,
      c: 4
    });
  });

  it('should return right with formaterArray', function() {
    expect(destructuringArray(targetArray, formater)).to.eql({
      a: 1,
      b: 2,
      d: 3,
      c: 4
    });
  });
});