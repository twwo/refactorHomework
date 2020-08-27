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
    const today = new Date();
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    t.is(result, '***********************\n' +
                  '**** Customer Owes ****\n' +
                  '***********************\n' +
                  'name: undefined\n' +
                  'amount: 3\n' +
                  `amount: ${dueDate.toLocaleDateString()}\n`);
})
