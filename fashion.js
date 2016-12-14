console.log("starting fashion page tests")
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var fs = require('fs');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var clickAndWait = function(buttonClass, pageTitle) {
	driver.findElement(By.className(buttonClass)).click();
	driver.wait(until.titleIs(pageTitle), 3000).catch(function(e) {
		console.log( pageTitle + " page is NOT found");
	});
};

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
	return driver.takeScreenshot().then(function(data) {
		fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
			if (err) throw err;
		});
	});
};


//log into WGSN
driver.manage().window().setSize(1200,1200);
driver.get('https://www.wgsn.com/fashion/')
driver.findElement(By.id('login-email-user')).sendKeys('austin.mcclain@wgsn.com');
driver.findElement(By.id('login-password')).sendKeys('amcd1443').catch(function(e) {
	console.log("timed out after 1 second");
});
driver.findElement(By.id('login-submit-button')).click();
driver.saveScreenshot('2imageWGSNfashion');

//code for checking images, clicking links, and then?

// checks that the first image in carousel works //also 'must haves' is failing bc selenium is not recognizing the newly opened page
clickAndWait('carousel_item ng-scope flex-active-slide',"Must-Haves S/S 17: Young Women's Apparel")
//checks that the second image in carousel works

//code to load the insights test page
clickAndWait('product-bar-link insight', 'Insight')
driver.saveScreenshot('3imageWGSNinsight');


//driver.wait(until.titleIs('User Login | WGSN | Creating Tomorrow'), 10000)

driver.quit();
