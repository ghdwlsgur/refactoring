'use strict';

const someCustomers = [
  {
    name: 'HongJinHyeok',
    address: {
      state: 'MA',
    },
  },
  {
    name: 'Jake',
    address: {
      state: 'CT',
    },
  },
  {
    name: 'Chris',
    address: {
      state: 'ME',
    },
  },
  {
    name: 'Pristine',
    address: {
      state: 'Seoul',
    },
  },
];

// 매개변수를 속성으로 바꾸기
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => isNewEngland(c));
