/**
 *  It creates an array with the values, not included in the other array.
 *
 * @example
 *
 * arrDiff([1, "a"], [1, 2]); // ['a']
 */
function arrDiff(arr1: unknown[], arr2: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    let skip = false;

    for (let j = 0; j < arr2.length; j++) {
      if (Object.is(arr1[i], arr2[j])) {
        skip = true;
      }
    }

    if (!skip) {
      result.push(arr1[i]);
    }
  }

  return result;
}

export default arrDiff;