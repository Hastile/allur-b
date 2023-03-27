const express = require('express');
const { chromium } = require('playwright');
const app = express();

app.get('/', async function (req, res) {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://www.google.com');
//   const title = await page.title();
//   await browser.close();
  const title = 'Google'
  res.send(`Google.com title: ${title}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});