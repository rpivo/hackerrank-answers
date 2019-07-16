const height = [1, 2, 3, 4, 5];
const k = 3;

function hurdleRace(k, height) {
  let heighest = Math.max.apply(null, height);
  if ((heighest - k) > 0) {
    return (heighest - k);
  } else {
    return 0;
  }
}

hurdleRace(k, height);