describe('Enter name feature', function() {

  it('should enter name as Tom', function() {
    browser.get('https://angularjs.org/');
    var name = element(by.model('yourName'));
    browser.actions().mouseMove(name).perform();
    name.sendKeys('Tom');
    browser.sleep(3000);

  })

})
