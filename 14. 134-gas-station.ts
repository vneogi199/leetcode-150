function canCompleteCircuit(gas: number[], cost: number[]): number {
  const sumGas = gas.reduce((a, b) => a + b, 0);
  const costSum = cost.reduce((a, b) => a + b, 0);
  if (sumGas < costSum) { return -1 };
  let res = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    total = total + gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }
  return res;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
