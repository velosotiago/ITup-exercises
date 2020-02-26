// SOURCE: https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week-4203.html

function isLeap(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return true;
  return false;
}

function getWeekDay(day, month, year) {
  const YY = year%100;
  const yearCode = (YY + (Math.floor(YY / 4)))%7;

  const monthCodes = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
  var monthCode = monthCodes[month-1];

  const CC = Math.floor(year/100);
  var centuryCode = CC % 4;
  switch (centuryCode) {
      case 0:
          centuryCode = 6;
          break;
      case 1:
          centuryCode = 4;
          break;
      case 2:
          centuryCode = 2;
          break;
      case 3:
          centuryCode = 0;
          break;
  }
  
  var leapYearCode = 0;
  if (isLeap(year)) leapYearCode = 1;
  if (month > 2) monthCode += leapYearCode;

  var dayOfWeek = (yearCode + monthCode + centuryCode + day - leapYearCode) % 7;
  return dayOfWeek;
}

function unluckyDays(year) {
  var count = 0;
  for (var month = 1; month <= 12; month++) {
    var weekDay = getWeekDay(13, month, year);
    if (weekDay == 5) {
      console.log(`13/${month}/${year} is a friday!`)
      count++;
    }
  }
  return count;
}

//console.log(getWeekDay(13, 2, 2020));
console.log(unluckyDays(2020));
