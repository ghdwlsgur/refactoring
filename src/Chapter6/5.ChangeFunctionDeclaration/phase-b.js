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

function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNEWinNewEngland(stateCode);
}

function xxNEWinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
