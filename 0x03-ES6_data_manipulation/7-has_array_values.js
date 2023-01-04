const hasValuesFromArray = (set, array) => {
  const values = new Set(set);
  return values.has(array);
};
export default hasValuesFromArray;
