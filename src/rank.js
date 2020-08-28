const voyageRiskChains = [
    function(voyage) {
        return 1;
    },
    function(voyage) {
        return voyage.length > 4 ? 2 : 0;
    },
    function(voyage) {
        return voyage.length > 8 ? voyage.length - 8 : 0;
    },
    function(voyage) {
        return [
                   'china',
                   'east-indies',
                 ].includes(voyage.zone) ? 4 : 0;
    }
]

function voyageRisk (voyage) {
    let result = 0;
    for (voyageRiskChain of voyageRiskChains) {
        result += voyageRiskChain(voyage);
    }
    return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

const voyageProfitFactorChains = [
    function(voyage, history) {
        return 2;
    },
    function(voyage, history) {
        return voyage.zone === 'china' ? 1 : 0;
    },
    function(voyage, history) {
        return voyage.zone === 'east-indies' ? 1 : 0;
    },
    function(voyage, history) {
        let result = 0;
        if (voyage.zone === 'china' && hasChina(history)) {
            result += 3
            if (history.length > 10) {
                result += 1;
            }
            if (voyage.length > 12) {
                result += 1;
            }
            if (voyage.length > 18) {
                result -= 1;
            }
        } else {
            if (history.length > 8) {
                result += 1;
            }
            if (voyage.length > 14) {
                result -= 1;
            }
        }
        return result;
    }
]

function voyageProfitFactor (voyage, history) {
  let result = 0;
  for (voyageProfitFactorChain of voyageProfitFactorChains) {
    result += voyageProfitFactorChain(voyage, history);
  }
  return result;
}

const resultA = 'A';
const resultB = 'B';

function rating (voyage, history) {
  const voyageProfitFactorResult = voyageProfitFactor(voyage, history);
  const voyageRiskResult = voyageRisk(voyage);
  const captainHistoryRiskResult = captainHistoryRisk(voyage, history);
  if (voyageProfitFactorResult * 3 > (voyageRiskResult + captainHistoryRiskResult * 2)) {
    return resultA;
  }
  else {
    return resultB;
  }
}

module.exports = {
    rating,
    voyageRisk,
    hasChina,
    captainHistoryRisk,
    voyageProfitFactor
};
