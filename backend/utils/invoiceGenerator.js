function generateInvoiceNumber(prefix, sequence) {

  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const day = String(now.getDate()).padStart(2, "0");

  const serial = String(sequence).padStart(4, "0");

  return `${prefix}-${year}${month}${day}-${serial}`;

}

module.exports = generateInvoiceNumber;