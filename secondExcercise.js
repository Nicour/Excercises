const maxSubarraySum = (array, n) => {
  if(array.length >= n) {
    let maxSum = 0;
    let lastSum = 0;
    for (let i = 0; i < n; i++) {
      maxSum += array[i];
    }
    lastSum = maxSum;

    for (let i = n; i < array.length; i++) {
      const currentSubArraySum = lastSum + array[i] - array[i - n];
      if(currentSubArraySum > maxSum) {
        maxSum = currentSubArraySum;
      }
      lastSum = currentSubArraySum
    }
    return maxSum;
  } else {
    return null;
  }
}