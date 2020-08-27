function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n'
                + '**** Customer Owes ****\n'
                + '***********************\n';

  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  result += `name: ${invoice.customer}\n`
            + `amount: ${outstanding}\n`
            + `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

module.exports = {
    printOwing
};
