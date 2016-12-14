console.log("starting log-in and log-out tests")
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    var fs = require('fs');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//helper functions
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


//go to wgsn.com
driver.manage().window().setSize(1200,1200);
driver.get('https://www.wgsn.com/en/').catch(function(e) {
	console.log("timed out")
});
driver.saveScreenshot('1imageWGSNlandingpage');
//log into WGSN
clickAndWait('button white header-btn log-in-btn','User Login | WGSN | Creating Tomorrow')
driver.findElement(By.id('login-email-user')).sendKeys('austin.mcclain@wgsn.com');
driver.findElement(By.id('login-password')).sendKeys('amcd1443').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();

//log out of wgsn.com
driver.findElement(By.className('account-dropdown-caret')).click().catch(function(e) {
	console.log("drop down NOT clicked");
});
driver.findElement(By.css("a[href*='accounts']")).click().catch(function(e) {
	console.log("did NOT log out properly");
});


driver.quit();




