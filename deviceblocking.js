// testing logging in on multiple browsers/devices

var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
	var fs = require('fs');

var clickAndWait = function(buttonClass, pageTitle) {
	driver.findElement(By.className(buttonClass)).click();
	driver.wait(until.titleIs(pageTitle), 3000).catch(function(e) {
		console.log(pageTitle + " page is NOT found");
	});
};

var driver = new webdriver.Builder()
	.forBrowser('firefox')
	.build();


driver.manage().window().setSize(1250,1250);
driver.get('https://www.wgsn.com').catch(function(e) {
	console.log("Firefix NOT load")
});

clickAndWait('button white header-btn log-in-btn','User Login | WGSN | Creating Tomorrow');
driver.findElement(By.id('login-email-user')).sendKeys('deviceblocker');
driver.findElement(By.id('login-password')).sendKeys('amcd1443').catch(function(e) {
	console.log("Firefix NOT sign in");
});



driver.quit();

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.manage().window().setSize(1250,1250);
driver.get('https://www.wgsn.com').catch(function(e) {
	console.log("Chrome NOT load")
});


driver.quit();




var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();