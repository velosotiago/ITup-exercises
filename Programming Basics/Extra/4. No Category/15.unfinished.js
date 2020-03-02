function isLeap(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return true;
  return false;
}

function dateNbDays(a0, a, p) {
  var year = 2016;
  var daysInYear = 366;
  var month = 1;
  var daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeap(year)) {
    daysInYear = 366;
    daysInMonth[1] = 29;
  } else {
    daysInYear = 365;
    daysInMonth[1] = 28;
  }
  var day = 1;
  var pDay = p / 100 / daysInYear;
  var dayCounter = 1;
  var money = a0;
  
  while (money < a) {
    money += money * pDay;
    day++;
    dayCounter++;
    
    if (day > daysInMonth[month - 1]) {
      day -= daysInMonth[month - 1];
      month++;
    }
    if (month > 12) {
      month = 1;
      year++;

      if (isLeap(year)) {
        daysInYear = 366;
        daysInMonth[1] = 29;
      } else {
        daysInYear = 365;
        daysInMonth[1] = 28;
      }
      pDay = p / 100 / daysInYear;
    }
  }
  console.log(dayCounter);
  return `${year}-${month}-${day}`;
}

console.log(dateNbDays(100, 101, 0.98));
console.log(dateNbDays(100, 150, 2));
