'use strict';

class Production {
  constructor(data) {
    this._adjustments = [];
    this._production = data.production;
  }

  get production() {
    console.assert(
      this._production === this.calculatedProduction,
      JSON.stringify({
        errorMessage: 'this._production !== this.calculatedProduction',
      }),
    );
    return this._production;
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  // applyAdjustment(anAdjustment) {
  //   this._adjustments.push(anAdjustment);
  //   this._production += anAdjustment.amount;
  // }
}
