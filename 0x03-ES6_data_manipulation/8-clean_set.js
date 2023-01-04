const cleanSet = (set, startString) => {
  let text = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    text = array.join('-');
  }
  return text;
};
export default cleanSet;
