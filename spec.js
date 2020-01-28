describe('Enter name feature', function() {

  it('should enter name as Tom', function() {
    // goto angular
    browser.get('https://angularjs.org/');

    // enter name
    var name = element(by.model('yourName'));
    browser.actions().mouseMove(name).perform();
    name.sendKeys('Tom');
    browser.sleep(3000);

    // verify display text is correct
    var display = element(by.xpath('//body/div[2]/div[1]/div[2]/div[2]/div/h1'));
    //console.log('==>' + display.getText());
    // make it pass
    expect(display.getText()).toEqual('Hello Tom!');
    // make it fail
    expect(display.getText()).toEqual('Hello Eastdil!');
  })

})
