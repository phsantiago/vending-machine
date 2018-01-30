const calcCoin = (name, price, changeValAcc, wallet) => {
  const coinQty = Math.floor(changeValAcc / price)

  let coin = 0;
  let newChangeVal = changeValAcc;

  if(wallet && wallet[name] == 0){
    coin = 0;
  }
  if(wallet && wallet[name] <= coinQty){
    coin = wallet[name];
  }
  if(wallet && wallet[name] > coinQty){
    coin = coinQty;
  }

  newChangeVal -= (price * coin);

  if (changeValAcc != newChangeVal) {
    return {
      coin: coin,
      changeValAcc: parseFloat(newChangeVal.toFixed(2)),
    }
  }

  return {
    coin: 0,
    changeValAcc: changeValAcc,
  }
}

const calcChange = (changeVal, wallet) => {
  let changeValAcc = changeVal;
  const coinAcc = {
    real: 0,
    centavos50: 0,
    centavos25: 0,
    centavos10: 0,
    centavos5: 0,
    centavo: 0,
  }

  let result = calcCoin('real', 1, changeValAcc, wallet);
  coinAcc.real = result.coin;
  changeValAcc = result.changeValAcc;

  result = calcCoin('centavos50', 0.50, changeValAcc, wallet);
  coinAcc.centavos50 = result.coin;
  changeValAcc = result.changeValAcc;

  result = calcCoin('centavos25', 0.25, changeValAcc, wallet);
  coinAcc.centavos25 = result.coin;
  changeValAcc = result.changeValAcc;

  result = calcCoin('centavos10', 0.10, changeValAcc, wallet);
  coinAcc.centavos10 = result.coin;
  changeValAcc = result.changeValAcc;

  result = calcCoin('centavos5', 0.05, changeValAcc, wallet);
  coinAcc.centavos5 = result.coin;
  changeValAcc = result.changeValAcc;

  result = calcCoin('centavo', 0.01, changeValAcc, wallet);
  coinAcc.centavo = result.coin;

  return coinAcc;
}
const wallet = {
  'centavo': 20,
  'centavos5': 13,
  'centavos10': 2,
  'centavos25': 22,
  'centavos50': 1,
  'real': 14,
}

console.log(calcChange(3.55, wallet));

module.exports = calcChange;
