import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
describe('WindowDimensionSpec', () => {
  it('test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const resp = await page.goto('https://www.google.com');

    await page.evaluate(() => {
      console.log(window.innerHeight);
      document.write('Suhail');
    });

    await page.screenshot({
      path:'example.png',
      fullPage:true,
      type:'png',

    });
    await browser.close();
  });
});
