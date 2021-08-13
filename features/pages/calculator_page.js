var CalculatorPage = function() {

	var txtfirst 	= element(by.model('first'));
	var txtsecond 	= element(by.model('second'));
	var btngo 		= element(by.id('gobutton'));
	var seloperator = element(by.model('operator'));
	var lblresult 	= element(by.binding('latest'));
	
  this.get = function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.setFirstValue = function(value) {
    txtfirst.sendKeys(value);
  };

  this.setSecondValue = function(value) {
    txtsecond.sendKeys(value);
  };

  this.setOperator = function(value) {
    seloperator.element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    return lblresult.getText();
  };

  this.clickGo = function() {
    btngo.click()
  }
  
  this.getHist = function() {
	var mappedVals = element.all(by.repeater('result in memory')).map(function (mappedVals) {
		return {
			result: mappedVals.element(by.binding('result.value')).getText()
		};
	return mappedVals;
	});
	
  }
  
   this.getCount = function(){
		var cont = element.all(by.binding('result.value')).count().then(function(valcont)
		{ 
			return Promise.resolve(valcont);
		});
		return cont;
  }
};

module.exports = CalculatorPage;
