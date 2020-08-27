const rankTest = require('ava');
const {rating, voyageRisk} = require('../src/rank');

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
