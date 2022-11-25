const fs = require('fs').promises;
const constants = require('fs').constants;
const EventEmitter = require('events');
const myEvent = new EventEmitter();

const file_rename_success = () => {
    console.log('/////////');
}

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            return fs.mkdir('./folder');
        }
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
        myEvent.emit("file_rename_success");
    })
    .catch((err) => {
        console.error(err);
        fs.rename('./folder/untitle.js', './folder/newfile.js');
        myEvent.on('event1',()=>{
            console.log('폴더명 변경');
        });
        myEvent.emit('event1');
    });