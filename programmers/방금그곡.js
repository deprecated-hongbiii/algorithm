function solution(m, musicinfos) {
  const mm = removeSharp(m);
  const musicinfoTable = [];

  musicinfos.forEach((info) => {
    const infoArr = info.split(',');
    let [start, end, title, sheet] = infoArr;
    const playingTime = getMinutes(end) - getMinutes(start);
    sheet = removeSharp(sheet);

    if (sheet.length > playingTime) {
      sheet = sheet.slice(0, playingTime);
    } else if (sheet.length < playingTime) {
      sheet = sheet.padEnd(playingTime, sheet);
    }

    musicinfoTable.push({
      playingTime,
      title,
      sheet,
    });
  });

  const filtered = musicinfoTable.filter((info) => info.sheet.includes(mm));

  if (!filtered.length) {
    return '(None)';
  } else if (filtered.length === 1) {
    return filtered[0].title;
  } else {
    filtered.sort((a, b) => {
      if (a.playingTime === b.playingTime) return 0;
      return b.playingTime - a.playingTime;
    });
    return filtered[0].title;
  }
}

function removeSharp(str) {
  const arr = str.split('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === '#') arr[i - 1] = arr[i - 1].toLowerCase();
  }
  return arr.filter((el) => el !== '#').join('');
}

function getMinutes(time) {
  const splited = time.split(':');
  const [hour, minute] = splited;
  return +hour * 60 + +minute;
}

console.log(
  solution('ABC', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:14,WORLD,ABCDEF'])
); // HELLO
