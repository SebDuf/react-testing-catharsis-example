import puppeteer from 'puppeteer';

import { wait } from './wait';

export async function createIndependantClient(openedBrowsers: puppeteer.Browser[]): Promise<puppeteer.Page> {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
    args: ['--use-fake-ui-for-media-stream'],
  });
  const pages = await browser.pages();
  const firstTab = pages[0];
  await firstTab.setViewport({ width: 960, height: 1000 });

  openedBrowsers.push(browser);

  await wait(2000);

  return firstTab;
}
