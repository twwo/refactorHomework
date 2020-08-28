const employeeTest = require('ava');
const {createEmployee} = require('../src/employee');

employeeTest('test employee with name Shao and type engineer', t => {
    const employee = createEmployee('Shao', 'engineer');
    const result = employee.toString();
    t.is(result, 'Shao (engineer)');
})
