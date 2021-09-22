function solution(enroll, referral, seller, amount) {
  const table = {};
  enroll.forEach((person, i) => {
    table[person] = {
      referral: referral[i],
      total: 0,
    };
  });

  table['-'] = {
    referral: null,
    total: 0,
  };

  for (let i = 0; i < seller.length; i++) {
    const sell = seller[i];
    let benefit = 100 * amount[i];
    let currReferral = table[sell].referral;
    let currSeller = sell;

    while (currReferral) {
      const tenPercent = Math.floor(benefit * 0.1);
      table[currSeller].total += benefit - tenPercent;
      if (!tenPercent) break;
      benefit = tenPercent;
      currSeller = currReferral;
      currReferral = table[currReferral].referral;
    }
  }

  return enroll.map((member) => table[member].total);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);
// [360, 958, 108, 0, 450, 18, 180, 1080]

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary', 'mary'],
    [12, 4, 2, 5, 10, 4]
  )
);
// [360, 1318, 108, 0, 450, 18, 180, 1080]
