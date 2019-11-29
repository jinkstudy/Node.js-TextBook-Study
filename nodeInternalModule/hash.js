//암호화
//단방향 암호화 - 복호화 불가한 암호화 방식. 즉 한번 암호화된 문자열을 원래 문자열로 되돌려 놓을 수 없다.
//주로 해시 기법을 사용
// 해시기법이란? 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식이다.

const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
//createHash(알고리즘) : 사용할 해시 알고리즘 ,md5 ,sha1, sha256,sha512등
//update(문자열) : 변환할 문자열을 넣어줍니다.
//digest(인코딩) : 인코딩할 알고리즘을 넣어줍니다. base64,hex,latin1이 주로 사용
//base64: dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
