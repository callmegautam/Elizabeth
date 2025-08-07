import puppeteer from "puppeteer-extra";
import fs from "fs";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export default async function fetchSite(url: string) {
    const browser = await puppeteer.launch({
        headless: false, // todo : make headless true
        defaultViewport: null,
    });

    const page = await browser.newPage();
    // const url = process.argv[2];

    if (!url) {
        console.error("❌ Please provide a URL.\nExample: node fetch.js https://example.com");
        process.exit(1);
    }

    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000);
    const content = await page.content();
    fs.writeFileSync("output.html", content);
    console.log("\n=== Page content (preview) ===\n");
    console.log(content.slice(0, 1000));

    await browser.close();
}
