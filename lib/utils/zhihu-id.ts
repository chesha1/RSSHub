import puppeteer from 'puppeteer';

export default async function fetchHexID(name: string): Promise<string> {
    const url = `https://www.zhihu.com/people/${name}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const scriptContent = await page.$eval('#js-initialData', (el) => el.textContent);

    let hexID: string = '';
    if (scriptContent) {
        const jsonData = JSON.parse(scriptContent);
        hexID = jsonData.initialState.entities.users[name].id;
    }
    await browser.close();
    return hexID;
}
