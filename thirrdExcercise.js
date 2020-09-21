const averagePair = (array, n) => {
  let i = 0;
  let j = array.length - 1;
  while(i < j) {
    const average = (array[i] + array[j]) / 2;
    if(average === n) {
      return true;
    } else if (average < n) {
      i++;
    } else {
      j--;
    }
  };
  return false
};
