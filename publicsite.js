console.log("testing public site links and pages")
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.manage().window().setSize(1500,1200);
driver.get('https://www.wgsn.com/en/').catch(function(e) {
	console.log("timed out")
});

//clicking home page (WGSN) link
driver.get('https://www.wgsn.com/en/');
driver.findElement(By.className('wgsn-logo')).click();

((JavascriptExecutor)driver).executeScript($(findElement(By.className('menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44005'))).hover()).catch(function(e) {
	console.log("drop down NOT clicked");
});



driver.findElement(By.className('menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children menu-item-65751')).click().catch(function(e) {
	console.log("drop down NOT clicked");
});

//driver.findElement(By.css(a{href*=''}))
// driver.findElement(By.css("a[href*='accounts']")).click().catch(function(e) {
// 	console.log("did NOT log out properly");
// });


//finish with logging into the site
driver.findElement(By.className('button white header-btn log-in-btn')).click();
driver.wait(until.titleIs('User Login | WGSN | Creating Tomorrow'), 1000, 'this did not work');
driver.findElement(By.id('login-email-user')).sendKeys('austin.mcclain');
driver.findElement(By.id('login-password')).sendKeys('Chainer123');


driver.quit();

