var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var CalculatorSteps = function() 
{
	var CalculatorPage = require("../pages/calculator_page.js");

  this.World = function MyWorld() {
    this.page = new CalculatorPage();
  };

  this.Given('The calculator is open', function (callback) {
    this.page.get();
    callback();
  });

  this.When('I calculate $first $operator $second', function (first, operator, second, callback) {
    this.page.setFirstValue(first);
    this.page.setOperator(operator);
    this.page.setSecondValue(second);
    this.page.clickGo();
    callback();
  });

  this.When('I enter first value of $first', function (first, callback) {
    this.page.setFirstValue(first);
    callback();
  });

  this.When('I enter second value of $second', function (second, callback) {
    this.page.setSecondValue(second);
    callback();
  });

  this.When('I click Go', function (callback) {
    this.page.clickGo();
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });
  
  this.Then('the table should have $count results', function(count, callback)
  {
	expect(this.page.getCount()).to.eventually.equal(count).and.notify(callback);
  });
  
  this.Then('the historic table should have $arg1 and $arg2 as result', function (arg1, arg2, callback) {
	  expect(this.page.getHist()).to.eventually.equal([{result: arg1},{result: arg2}]).and.notify(callback);
  });
};

module.exports = CalculatorSteps;