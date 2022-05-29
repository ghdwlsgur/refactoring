'use strict';

function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  // return new Bird(bird).plumage;
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  // return new Bird(bird).airSpeedVelocity;
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwagianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwagianBlueParrot extends Bird {}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (bird.type) {
      case '유럽 제비':
        return '보통이다.';
      case '아프리카 제비':
        return bird.numberOfCounts > 2 ? '지쳤다' : '보통이다';
      case '노르웨이 파랑 앵무':
        return bird.voltage > 100 ? '그을렸다' : '예쁘다';
      default:
        return '알 수 없다.';
    }
  }

  get airSpeedVelocity() {
    switch (bird.type) {
      case '유럽 제비':
        return 35;
      case '아프리카 제비':
        return 40 - 2 * bird.numberOfCounts;
      case '노르웨이 파랑 앵무':
        return bird.isNailed ? 0 : 10 + bird.voltage / 10;
      default:
        return null;
    }
  }
}
