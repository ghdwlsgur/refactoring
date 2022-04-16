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
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
