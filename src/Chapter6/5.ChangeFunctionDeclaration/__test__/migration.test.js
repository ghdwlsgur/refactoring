'use strict';

describe('migration phase', () => {
  it('phase A', () => {
    class Book {
      constructor(customer) {
        this._reservations = [];
        this._customer = customer;
      }

      reservations() {
        return this._reservations;
      }

      customer() {
        return this._customer;
      }

      addReservation(customer) {
        this.zz_addReservation(customer);
      }

      zz_addReservation(customer) {
        this._reservations.push(customer);
      }
    }

    const customer = 'HongJinHyeok';
    const book = new Book(customer);
    expect(book.customer()).toBe(customer);
  });

  it.only('phase B', () => {
    class Book {
      constructor(customer) {
        this._reservations = [];
        this._customer = customer;
      }

      get reservations() {
        return this._reservations;
      }

      get customer() {
        return this._customer;
      }

      addReservation(customer) {
        this.zz_addReservation(customer, false);
      }

      zz_addReservation(customer, isPriority) {
        // 매개변수를 변경할 경우, 호출문을 변경하기 전에 호출하는 곳에서 새로 추가한 매개변수를 실제로 사용하는지 확인한다.
        expect(isPriority === true || isPriority === false);
        this._reservations.push(customer);
      }
    }

    const customer = 'HongJinHyeok';
    const book = new Book(customer);
    expect(book.customer()).toBe(customer);
  });
});
