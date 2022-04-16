'use strict';

let _title = 'untitled';

function title() {
  return _title;
}

function setTitle(arg) {
  _title = arg;
}

setTitle('not untitled');
console.log(_title);
