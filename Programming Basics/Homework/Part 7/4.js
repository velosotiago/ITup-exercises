function bigAvgSalary(arr) {
  var mCount = 0;
  var mMax = 0;
  var mSum = 0;
  var fCount = 0;
  var fMax = 0;
  var fSum = 0;

  for (var i = 0; i < arr.length; i++) {
    const person = arr[i];
    if (person.sex === 'M') {
      mSum += person.salary;
      mCount++;
      if (person.salary > mMax) {
        mMax = person.salary;
      }
    } else if (person.sex === 'F') {
      fSum += person.salary;
      fCount++;
      if (person.salary > fMax) {
        fMax = person.salary;
      }
    }
  }
  console.log(`M Max: ${mMax}\nM Avg: ${mSum / mCount}\nF Max: ${fMax}\nF Avg: ${fSum / fCount}`);
}

const persons = [
  {
    name: 'Tiago Veloso',
    age: 21,
    sex: 'M',
    salary: 800.9
  },
  {
    name: 'António Velório',
    age: 37,
    sex: 'M',
    salary: 2314.7
  },
  {
    name: 'Marta Manta',
    age: 23,
    sex: 'F',
    salary: 2312.8
  },
  {
    name: 'Gina Antonieta',
    age: 32,
    sex: 'F',
    salary: 1234.32
  },
]

bigAvgSalary(persons);