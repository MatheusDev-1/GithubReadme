import puppeteer from 'puppeteer';
import projectConfig from '../config/project'

const { projectDir } = projectConfig

export default async function screenshot(): Promise<void> {
  const browser = await puppeteer.launch({defaultViewport: null, headless:false, args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({path: `${projectDir}\\screenshot.png`});

  await browser.close();
  console.log('✨ Screenshots Saved ✨')
}
