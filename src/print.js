function printOwing (invoice) {
  let outstanding = calculateOutstanding(invoice.borderSpacing);
  invoice.dueDate = getDueDate();
  let result = '***********************\n'
              + '**** Customer Owes ****\n'
              + '***********************\n';
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

function getDueDate() {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

module.exports = {
    printOwing
};
