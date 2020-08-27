const rankTest = require('ava');
const {rating, voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor} = require('../src/rank');

rankTest('test1:test rating with answer B', t => {
    const voyage = {
      zone: 'west-indies',
      length: 10,
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 5,
      },{
        zone: 'west-indies',
        profit: 15,
      },{
        zone: 'china',
        profit: -2,
      },
      {
        zone: 'west-africa',
        profit: 7,
      },
    ];
    const result = rating(voyage, history);
    t.is(result, 'B');
})

rankTest('test voyageRisk with length < 4', t => {
    const voyage = {
      zone: 'west-indies',
      length: 3,
    };
    const result = voyageRisk(voyage);
    t.is(result, 1);
})

rankTest('test voyageRisk with length > 4 and < 8', t => {
    const voyage = {
      zone: 'west-indies',
      length: 5,
    };
    const result = voyageRisk(voyage);
    t.is(result, 3);
})

rankTest('test voyageRisk with length > 8', t => {
    const voyage = {
      zone: 'west-indies',
      length: 10,
    };
    const result = voyageRisk(voyage);
    t.is(result, 5);
})

rankTest('test voyageRisk with zone = china', t => {
    const voyage = {
      zone: 'china',
      length: 10,
    };
    const result = voyageRisk(voyage);
    t.is(result, 9);
})

rankTest('test hasChina with history has china', t => {
    const history = [
          {
            zone: 'china',
            profit: -2,
          }
        ];
    const result = hasChina(history);
    t.is(true, result);
})

rankTest('test hasChina with history not has china', t => {
    const history = [
          {
            zone: 'west-indies',
            profit: -2,
          }
        ];
    const result = hasChina(history);
    t.is(false, result);
})

rankTest('test captainHistoryRisk with history length < 5 and history have 1 profit < 0 and history has china and voyage zone is china', t => {
    const history = [
          {
            zone: 'china',
            profit: -2,
          }
        ];
    const voyage = {
          zone: 'china',
          length: 10,
        };
    const result = captainHistoryRisk(voyage, history);
    t.is(4, result);
})

rankTest('test captainHistoryRisk with history length > 5 and history have 1 profit < 0 and history has china and voyage zone is china', t => {
    const history = [
          {
            zone: 'east-indies',
            profit: 5,
          },{
            zone: 'west-indies',
            profit: 15,
          },{
            zone: 'china',
            profit: -2,
          },
          {
            zone: 'west-africa',
            profit: 7,
          },
          {
            zone: 'west-africa',
            profit: 7,
          }
        ];
    const voyage = {
          zone: 'china',
          length: 10,
        };
    const result = captainHistoryRisk(voyage, history);
    t.is(0, result);
})

rankTest('test captainHistoryRisk with history length < 5 and history have 0 profit < 0 and history has china and voyage zone is china', t => {
    const history = [
          {
            zone: 'china',
            profit: 1,
          }
        ];
    const voyage = {
          zone: 'china',
          length: 10,
        };
    const result = captainHistoryRisk(voyage, history);
    t.is(3, result);
})

rankTest('test captainHistoryRisk with history length < 5 and history have 1 profit < 0 and history not has china and voyage zone is china', t => {
    const history = [
          {
            zone: 'east-indies',
            profit: -1,
          }
        ];
    const voyage = {
          zone: 'china',
          length: 10,
        };
    const result = captainHistoryRisk(voyage, history);
    t.is(6, result);
})

rankTest('test captainHistoryRisk with history length < 5 and history have 1 profit < 0 and history not has china and voyage zone is not china', t => {
    const history = [
          {
            zone: 'china',
            profit: -1,
          }
        ];
    const voyage = {
          zone: 'east-indies',
          length: 10,
        };
    const result = captainHistoryRisk(voyage, history);
    t.is(6, result);
})

rankTest('test voyageProfitFactor with voyage zone is west-indies and voyage length > 14 and history.length > 8', t => {
    const voyage = {
          zone: 'west-indies',
          length: 15,
        };
    const history = [
              {
                zone: 'east-indies',
                profit: 5,
              },{
                zone: 'west-indies',
                profit: 15,
              },{
                zone: 'west-indies',
                profit: -2,
              },
              {
                zone: 'west-africa',
                profit: 7,
              },
              {
                zone: 'east-indies',
                profit: 5,
              },{
                zone: 'west-indies',
                profit: 15,
              },{
                zone: 'west-indies',
                profit: -2,
              },
              {
                zone: 'west-africa',
                profit: 7,
              },
              {
                zone: 'west-africa',
                profit: 7,
              },
            ];
    const result = voyageProfitFactor(voyage, history);
    t.is(2, result);
})

rankTest('test voyageProfitFactor with voyage zone is east-indies and voyage length > 14 and history.length > 8', t => {
    const voyage = {
          zone: 'east-indies',
          length: 15,
        };
    const history = [
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                ];
    const result = voyageProfitFactor(voyage, history);
    t.is(3, result);
})

rankTest('test voyageProfitFactor with voyage zone is china and voyage length > 14 and history.length > 8 and history not has china', t => {
    const voyage = {
          zone: 'china',
          length: 15,
        };
    const history = [
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                ];
    const result = voyageProfitFactor(voyage, history);
    t.is(3, result);
})

rankTest('test voyageProfitFactor with voyage zone is china and voyage length > 12 and history.length > 10 and history has china', t => {
    const voyage = {
          zone: 'china',
          length: 13,
        };
    const history = [
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'china',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                ];
    const result = voyageProfitFactor(voyage, history);
    t.is(8, result);
})

rankTest('test voyageProfitFactor with voyage zone is china and voyage length > 18 and history.length > 10 and history has china', t => {
    const voyage = {
          zone: 'china',
          length: 19,
        };
    const history = [
                  {
                    zone: 'east-indies',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'china',
                    profit: 5,
                  },{
                    zone: 'west-indies',
                    profit: 15,
                  },{
                    zone: 'west-indies',
                    profit: -2,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                  {
                    zone: 'west-africa',
                    profit: 7,
                  },
                ];
    const result = voyageProfitFactor(voyage, history);
    t.is(7, result);
})