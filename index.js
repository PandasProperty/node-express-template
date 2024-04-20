const { jsPDF } = require("jspdf");

const { generatePdfReceipt } = require('dynamic-jspdf-receipt');

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const doc = new jsPDF({
    compress: true,
  });
  generatePdfReceipt(doc, {
    companyDetails: [
      {
        name: 'Company name',
        value: 'Anda Tech Solutions',
      },
      {
        name: 'Company address',
        value: 'Bucharest, Romania',
      },
      {
        name: 'Company phone',
        value: '(+XX)XXX-XXX-XXX',
      },
    ],
    receiptDetails: [
      {
        name: 'Receipe nr.',
        value: '00000001',
      },
      {
        name: 'Receipe date',
        value: 'Saturday, 20 April 2024',
      },
    ],
    purchaseTable: {
      headers: ['Service', 'Quantity', 'Cost'],
      items: [
        ['Software development solution', '1', '100000$'],
        ['Additional Consulting', '1', '100000$'],
      ],
      headerColor: [0, 95, 173],
    },
    additionalInfo: ['Thank you for choosing our services'],
    ammountDetails: [
      {
        name: 'Total Cost',
        value: '20000$',
      },
      {
        name: 'Discount',
        value: '1000$',
      },
      {
        name: 'Total Cost',
        value: '19000$',
      },
    ],
  });
  
  doc.save('table.pdf')

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})