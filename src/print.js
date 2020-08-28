function printOwing (invoice) {
  invoice.dueDate = getDueDate();
  return getTEXTResult(invoice, calculateOutstanding(invoice.borderSpacing));
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

function getTEXTResult(invoice, outstanding) {
    let result = '***********************\n'
                + '**** Customer Owes ****\n'
                + '***********************\n'
                + `name: ${invoice.customer}\n`
                + `amount: ${outstanding}\n`
                + `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
    return result;
}

module.exports = {
    printOwing
};
