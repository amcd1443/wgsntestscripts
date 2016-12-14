//this is testing the user blocking's: 5+ failed logins, and logging in and out too many times
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

driver.manage().window().setSize(1200,1200);
driver.get('https://www.wgsn.com/en/').catch(function(e) {
	console.log("timed out")
});
//failed login 1
clickAndWait('button white header-btn log-in-btn','User Login | WGSN | Creating Tomorrow')
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("login failed")
});
driver.findElement(By.id('login-submit-button')).click();

//failed login 2
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();

//failed login 3
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();

//failed login 4
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();

//failed login 5
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();

// failed login 6, should see the suspended account text
driver.findElement(By.id('login-email-user')).sendKeys('userblocking');
driver.findElement(By.id('login-password')).sendKeys('asdf123').catch(function(e) {
	console.log("timed out");
});
driver.findElement(By.id('login-submit-button')).click();
driver.findElement(By.className('error-message displayError')).catch(function(e) {
	console.log("did NOT find error message")
});


driver.quit();