const calcChange = require('./index.js');

describe('calcChange', () => {
  it('should return a object with kinds of coins availble', () => {
    expect(Object.keys(calcChange()).sort()).toEqual(['1centavo', '5centavos', '10centavos', '25centavos', '50centavos', '1real'].sort());
  })
})
