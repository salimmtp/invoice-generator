const express = require('express');
const { getInvoice } = require('./converter');
const app = express();
app.use(express.json());
const PORT = process.env['PORT'] || 11000;
const fs = require('fs');

app.use('/getInvoice', (req, res) => {
  getInvoice(req.body)
    .then(pdf => {
      // res.status(200);
      // res.contentType('application/pdf');
      // res.send(pdf);

      const fileName = 'invoice-latest.pdf';

      fs.writeFile(fileName, pdf, 'binary', err => {
        if (err) {
          console.error(err);
          res.status(500).send({ success: false, error: 'Failed to save PDF file' });
        } else {
          // Send success response
          res.status(200).send({ success: true, fileName });
        }
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ success: false, error: 'something went wrong' });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
