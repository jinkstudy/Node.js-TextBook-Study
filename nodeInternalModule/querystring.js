const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parseUrl.query);

console.log('querystring.parse():', query); //url의 query부분을 자바스크립트 객체로 분해해준다.
//querystring.parse(): [Object: null prototype] {
//     page: '3',
//     limit: '10',
//     category: [ 'nodejs', 'javascript' ]
//   }
console.log('querystring.stringify():', querystring.stringify(query)); //분해된 query객체를 문자열로 다시 조립.
//querystring.stringify(): page=3&limit=10&category=nodejs&category=javascript
