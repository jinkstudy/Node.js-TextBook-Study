const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
// crypto.createCipher(알고리즘,키) : 암호화 알고리즘과 키를 넣어준다.
// console.log(crypto.getCiphers()); //알고리즘 확인
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
// cipher.update(문자열,인코딩, 출력 인코딩)
//chipher.final(출력 인코딩) : 출력 결과문의 인코딩을 넣어주면 암호화가 완료.
console.log('암호화:', result)

//복호화
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2)

