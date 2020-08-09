const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [22, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3];
const allAges3 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const tkPoisha = [350, 550, 850, 750, 1050];
const maximum2 = Math.max(...tkPoisha);
console.log(maximum2);