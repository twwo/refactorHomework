const printTest = require('ava');
const {printOwing} = require('../src/print');

printTest('test printOwing', t => {
    let invoice = {
        borderSpacing: [
            {amount: 1},
            {amount: 2}
        ]
    }
    const result = printOwing(invoice);
    t.is(result, '***********************\n' +
                  '**** Customer Owes ****\n' +
                  '***********************\n' +
                  'name: undefined\n' +
                  'amount: 3\n' +
                  'amount: 9/26/2020\n');
})
