class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    if (![
      'engineer',
      'manager',
      'salesman',
    ].includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}

function createEmployee(name, type) {
    return new Employee(name, type);
}

module.exports = {
    createEmployee
};