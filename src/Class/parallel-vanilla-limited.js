'use strict';

const tasks = [];
let concurrency = 2,
  running = 0,
  completed = 0,
  index = 0;

function next() {
  while (running < concurrency && index < tasks.length) {
    task = tasks[index++];
    task(() => {
      if (completed === tasks.length) return finish();
      completed++, running--;
      next();
    });
    running++;
  }
}
next();

function finish() {
  return 'finish';
}

class TaskQueue {
  constructor(concurrency) {
    this._concurrency = cpncurrency;
    this._running = 0;
    this._queue = [];
  }

  pushTask(task) {
    this._queue.push(task);
    this.next();
  }

  next() {
    while (this.running < this.concurrency && this._queue.length) {
      const task = this._queue.shift();
      task(() => {
        this._running--;
        this.next();
      });
      this.running++;
    }
  }
}
