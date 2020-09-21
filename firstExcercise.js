const highestOccurrence = (array) => {
  let highestOccurrenceElements = [];
  let higestOccurrenceCounter = 0;
  let valuesWithOccurrencies = {};
  array.forEach(element => {
    if(valuesWithOccurrencies[element]) {
      valuesWithOccurrencies[element]++;
    } else {
      valuesWithOccurrencies[element] = 1;
    }
    if(valuesWithOccurrencies[element] >= higestOccurrenceCounter) {
      higestOccurrenceCounter = valuesWithOccurrencies[element];
    }
  });
  array.forEach(element => {
    if(valuesWithOccurrencies[element] === higestOccurrenceCounter) {
      if(highestOccurrenceElements.indexOf(element) === -1)
      highestOccurrenceElements.push(element);
    }
  });
  return (highestOccurrenceElements);
};