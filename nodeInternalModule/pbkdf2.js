const crypto = require('crypto');

//pbkdf2 : 기존문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘 반복 적용.

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt) //+UfRFAIf6oh1XKOfyhA23OHx70olIPOkPgMSvOXbX7Pa2ABvGyX3jRqz9I9zooOybvVaU0stGyXwOo5f4V4nrA==
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        //비밀번호, salt, 반복횟수, 출력바이트 , 해시알고리즘.
        console.log('password:', key.toString('base64'));
        //jntBCzbNjpgEmjW1fW5B6DX3MhrvAKDZlDWqEAl0iY9LPQ3DwQ1kYdst6nOsvju/LbhOgBrGfnUHbFNq9TCP4Q==
    })
})