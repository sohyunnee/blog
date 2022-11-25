const fs = require('fs').promises;

fs.writeFile('./readme.txt', 'hello world', encoding="utf-8", function(err){
    if(err) throw err;
    console.log('파일을 작성했습니다ㅡㅡ');
});