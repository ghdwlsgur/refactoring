'use strict';

function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter(line => line.trim() !== '')
    .map(line => line.split(','))
    .filter(record => record[1].trim() === 'India');
  for (const line of loopItems) {
    const record = line;

    result.push(line);
  }
  return result;
}
