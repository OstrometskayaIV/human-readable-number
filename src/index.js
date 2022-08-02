module.exports = function toReadable (number) {
  let unitsArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let tempNum = number % 100;
  let tenth = Math.trunc(tempNum / 10);
  let units = number % 10;
  let hundreds = Math.trunc(number / 100);
  let result = '';

  if (number === 0) {
    result = 'zero';
  }
  else if (tempNum < 20) {
    result = unitsArr[tempNum];
  }
  else {
    result = tensArr[tenth] + ' ' + unitsArr[units];
  }

  if (number >= 100 && number <= 999) {
    result = unitsArr[hundreds] + ' ' + 'hundred' + ' ' + result;
  }
  return result.trim();
}

