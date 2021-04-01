const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
        // await page.goto('https://api.example.com');
        await page.goto('http://localhost:3000');
        await page.setViewport({
        width:1200,
        height:800,
        })
        await page.type('#name', 'test');
        await page.type('#email', 'test@iamneo.ai');
        await page.type('#contactno', '123');
        await page.type('#image', 'https://picsum.photos/536/354');
        
        await page.click('#create');
        await page.waitForSelector('#cardname', {timeout : 1500});
        await page.waitForSelector('#cardemail', {timeout : 1500});
        await page.waitForSelector('#contactnumber', {timeout : 1500});
        await page.click('#delete');

        try {
            await page.waitForSelector('#cardname', {timeout : 1500});
            await page.waitForSelector('#cardemail', {timeout : 1500});
            await page.waitForSelector('#contactnumber', {timeout : 1500});
            console.log('TESTCASE:test_case6:failure');
        } catch (error) {
            console.log('TESTCASE:test_case6:success');
        }
        console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();