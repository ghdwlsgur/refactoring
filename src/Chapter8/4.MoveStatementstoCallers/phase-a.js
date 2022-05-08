'use strict';

// 문장을 호출한 곳으로 옮기기

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
  outStream.write(`<p>위치: ${photo.location}</p>`);
}
