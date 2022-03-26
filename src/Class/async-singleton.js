'use strict';

class AsyncSingleton {
  static _instance;

  constructor() {
    if (AsyncSingleton._instance) return AsyncSingleton._instance;

    return (async () => {
      AsyncSingleton._instance = this;
      return AsyncSingleton._instance;
    })();
  }

  greet() {
    console.log('hello world');
  }
}

(async () => {
  try {
    const instance = await new AsyncSingleton();
    console.log(instance);
    instance.greet();
  } catch (error) {
    console.log(error);
  }
})();
