import puppeteer from 'puppeteer';

import { createIndependantClient } from '../utils/createIndependantClient';

let browsers: puppeteer.Browser[] = [];

describe('E2E test', () => {
  beforeEach(async () => {
    await Promise.all(browsers.map(browser => browser.close()));

    browsers = [];
  });

  afterEach(async () => {
    await Promise.all(browsers.map(browser => browser.close()));
  });

  it('should be able to launch three browsers simultaneously', async () => {
    const [Browser1, Browser2, Browser3] = await Promise.all([
      createIndependantClient(browsers),
      createIndependantClient(browsers),
      createIndependantClient(browsers),
    ]);

    await Browser1.goto('http://localhost:3000/#/');
    await Browser2.goto('http://localhost:3000/#/');
    await Browser3.goto('http://localhost:3000/#/');
  });
});
