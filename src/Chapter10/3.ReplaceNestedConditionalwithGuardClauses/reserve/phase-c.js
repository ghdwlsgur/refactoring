'use strict';

function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) return result;
  if (!(anInstrument.interesRate > 0 && anInstrument.duration > 0))
    return result;

  result =
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor;
  return result;
}
