function add(num) {
    var count = 0;
    var _b = function(l){
        count += l;
        return _b
    }
    _b.valueOf = function(){
        return count
    }
    return _b(num)
}

var assert = require('assert');

describe('feature test', function() {
  it('should return 0 when add(0)', function() {
    assert.equal(add(0), 0);
  });

  it('should return 6 when add(1)(2)(3)', function() {
    assert.equal(add(1)(2)(3), 6);
  });

  it('should return 10 when add(1)(2)(3)(4)', function() {
    assert.equal(add(1)(2)(3)(4), 10);
  });
});