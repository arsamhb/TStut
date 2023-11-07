// index signature

// interface ITransaction {
//   readonly [key: string]: number;
//   [key: string]: number;
// }

interface ITransaction {
  coffee: number;
  food: number;
  clothes: number;
}

const todayTransactions: ITransaction = {
  coffee: -50,
  food: -100,
  clothes: -500,
};

const sum = (obj: ITransaction) => {
  let total = 0;
  for (const transaction in obj) {
    total += obj[transaction as keyof ITransaction];
  }
  return total;
};

console.log(sum(todayTransactions));

console.log(Object.keys(todayTransactions));
