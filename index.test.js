const calcChange = require('./index.js');

describe('calcChange', () => {
  it('should return a object with kinds of coins availble', () => {
    expect(Object.keys(calcChange()).sort()).toEqual(['centavo', 'centavos5', 'centavos10', 'centavos25', 'centavos50', 'real'].sort());
  })

  it('should return 3 coins of kind "1real", one of 50 and one of 5 when receive 3.55', () => {
    const wallet = {
      'centavo': 20,
      'centavos5': 13,
      'centavos10': 2,
      'centavos25': 22,
      'centavos50': 1,
      'real': 14,
    }
    expect(calcChange(3.55, wallet).real).toBe(3);
    expect(calcChange(3.55, wallet).centavos50).toBe(1);
    expect(calcChange(3.55, wallet).centavos5).toBe(1);
  });

  it('should propely calc 12 (10 real and 200 cents)', () => {
    const wallet = {
      'centavo': 200,
      'centavos5': 0,
      'centavos10': 0,
      'centavos25': 0,
      'centavos50': 0,
      'real': 10,
    }
    const result = {
      'centavo': 200,
      'centavos5': 0,
      'centavos10': 0,
      'centavos25': 0,
      'centavos50': 0,
      'real': 10,
    }
    expect(calcChange(12, wallet)).toEqual(result);
  });
})
