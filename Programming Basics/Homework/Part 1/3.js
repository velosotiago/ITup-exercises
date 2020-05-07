function diff(Age, Average) {
  if (Age > Average) {
    return Age - Average;
  } else {
    return Average - Age;
  }
}

console.log(diff(18, 20));
console.log(diff(20, 18));