function printOwing (invoice) {
  let outstanding = calculateOutstanding(invoice.borderSpacing);
  let result = '***********************\n'
                + '**** Customer Owes ****\n'
                + '***********************\n';
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  result += `name: ${invoice.customer}\n`
            + `amount: ${outstanding}\n`
            + `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

function calculateOutstanding(borderSpacing) {
    let outstanding = 0;
    for (const o of borderSpacing) {
        outstanding += o.amount;
      }
    return outstanding;
}

module.exports = {
    printOwing
};
