'use strict';

const { Province } = require('../province');
const { sampleProvinceData } = require('../sample-data');

describe('province', function () {
  let asia;
  beforeEach(function () {
    // 공유 픽스처보다 표준 픽스처를 사용하자.
    /*
      beforeEach 구문은 각각의 테스트 바로 전에 실행되어 asia를 초기화하기 때문에 모든 테스트가
      자신만의 새로운 asia를 사용하게 된다. 이처럼 개별 테스트를 실행할 때마다 픽스처를 새로 만들면
      모든 테스트를 독립적으로 수행할 수 있어서, 결과를 예측할 수 없어 골치를 썩는 사태를 예방할 수 있다.
    */
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', function () {
    // const asia = new Province(sampleProvinceData);
    expect(asia.shortfall).toEqual(5);
  });

  it('profit', function () {
    // const asia = new Province(sampleProvinceData);
    expect(asia.profit).toEqual(230);
  });

  it('change production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });

  it('zero demand', function () {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });

  it('negative demand', function () {
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });

  it('empty string demand', function () {
    asia.demand = '';
    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});

// 경계 조건 검사하기
describe('no producers', function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it('shortfall', function () {
    expect(noProducers.shortfall).toEqual(30);
  });

  it('profit', function () {
    expect(noProducers.profit).toEqual(0);
  });
});

describe('string for producers', function () {
  it('', function () {
    const data = {
      name: 'String producers',
      producers: '',
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).toEqual(30);
  });
});
