function naiveStringSearch(long, short) {
  let match = 0;
  let count = 0;

  for (let i = 0; i + short.length <= long.length; i++) {

    for (let j = 0; j < short.length; j++) {
      if (long[i + j] === short[j]) {
        count++;
      }
    }

    if (count === short.length) match++;
    count = 0;
  }
  return match;
}

function naiveStringSearchAnswer(long, short) {
  let match = 0;

  for (let i = 0; i < long.length; i++) {

    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }

      if (short.length - 1 === j) match++;
    }
  }
  return match;
}

console.log(naiveStringSearchAnswer("lori loled loled", "loled "))

