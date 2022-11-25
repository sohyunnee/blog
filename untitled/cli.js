#!/usr/bin/env node

(() => {

    console.log('\x1b[31m%s\x1b[0m', '[clitest Start] 시작합니다.');

    console.log('\x1b[32m%s\x1b[0m',"process.argv[0]: " + process.argv[0]);
    console.log('\x1b[33m%s\x1b[0m',"process.argv[1]: " + process.argv[1]);

    let result = Number(process.argv[2]) + Number(process.argv[3]);

    console.log('\x1b[34m%s\x1b[0m', '[Result] arg1 + arg2 = ', result);

})();