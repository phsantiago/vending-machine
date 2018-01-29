const calcChange = (changeVal, wallet) => {

  return {
    "1centavo": 0,
    "5centavos": 1,
    "10centavos": 0,
    "25centavos": 0,
    "50centavos": 1,
    "1real": 3,
  }
}

module.exports = calcChange;
