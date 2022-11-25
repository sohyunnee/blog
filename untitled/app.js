const os = require("os");
const path = require('path');
require("dotenv").config();
const url = require('url');

const {URL} = url;
const myURL = new URL('https://www.yonhapnewstv.co.kr/news/MYH20221101009700038');
console.log('new URL():', myURL);

const myurl = {
    href: 'https://www.yonhapnewstv.co.kr/news/MYH20221101009700038',
    origin: 'https://www.yonhapnewstv.co.kr',
    protocol: 'https:',
    username: 'so',
    password: 'why',
    host: 'www.yonhapnewstv.co.kr',
    hostname: 'www.yonhapnewstv.co.kr',
    port: '',
    pathname: '/news/MYH20221101009700038',
    search: '',
    searchParams: URLSearchParams,
    hash: ''
}
console.log("newURL1->",url.format(myurl));