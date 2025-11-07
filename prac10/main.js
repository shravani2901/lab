const num = parseFloat(process.argv[2]);
const upto = 10;

//validation
if (Number.isNaN(num)) {
  console.log("enter valid number");
  process.exit(1);
}

if (num === 0) {
  console.log("enter number other than 0");
  process.exit(1);
}

const printTable = (label, loopFn) => {
  console.log(`\nMultiplication Table of ${num} using ${label}`);
  loopFn();
};

printTable("For Loop", () => {
  for (let i = 1; i <= upto; i++) console.log(`${num} x ${i}=${num * i}`);
});

printTable("While Loop", () => {
  let i = 1;
  while (i <= upto) {
    console.log(`${num} x ${i}=${num * i}`);
    i++;
  }
});

printTable("DoWhile Loop", () => {
  let i = 1;
  do {
    console.log(`${num} x ${i}=${num * i}`);
    i++;
  } while (i <= upto);
});
