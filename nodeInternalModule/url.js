// Node의 url 처리에는 크게 두가지 방식이 있다.
// 1. WHATWG( 웹표준 정하는 단체의 이름) 방식
// 2. 노드사용방식

const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log("new URL():", myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');
const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parseUrl); // 주소 분해
console.log('url.format():', url.format(parseUrl)); // 분해 된 url을 다시 원래 상태로 조립.

