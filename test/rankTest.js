const rankTest = require('ava');
const {rating} = require('../src/rank');

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

rankTest('test1:test rating with answer A', t => {
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
