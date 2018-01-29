const calcChange = require('./index.js');

describe('calcChange', () => {
  it('should return a object with kinds of coins availble', () => {
    expect(Object.keys(calcChange()).sort()).toEqual(['1centavo', '5centavos', '10centavos', '25centavos', '50centavos', '1real'].sort());
  })

  it('should return 3 coins of kind "1real", one of 50 and one of 5 when receive 3.55', () => {
    const wallet = {
      '1centavo': 20,
      '5centavos': 13,
      '10centavos': 2,
      '25centavos': 22,
      '50centavos': 1,
      '1real': 14,
    }
    const result = {
      '1centavo': 0,
      '5centavos': 1,
      '10centavos': 0,
      '25centavos': 0,
      '50centavos': 1,
      '1real': 3,
    }
    expect(calcChange(3.55, wallet)).toEqual(result);
  })
})
