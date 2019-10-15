const getCombinationTotalWeight = (combination) => {
  const sum = combination.reduce((a, b) => a + b.weight, 0);
  return sum;
};

export default getCombinationTotalWeight;
