export function sortedKeys(obj) {
  return Object.keys(obj).sort((string1, string2) =>
    string1.length - string2.length);
}


export function getFilteredKeys(obj) {
  return Object.keys(obj).filter(key => {
    if (key === 'age') return key;
    else return false;
  });
};

export function getArrayofFilteredKeysAndValues(obj) {
  return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {
  return Object.entries(obj).sort((arr1, arr2) => {
    return arr2[1].length - arr1[1].legnth;
  });
}