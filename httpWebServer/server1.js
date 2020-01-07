const http = require('http');

// http.createServer((req, res) => {
//     res.write('<h1> Hello Node!</h1>');
//     res.end('<p>Hello Server</p>');

// }).listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기 중입니다.')
// }) // 클라이언트에 공개할 포트 번호와 포트 연결 완료 후 실행될 콜백 함수를 넣어줌.

//또는 아래 처럼 할 수도 있다


const server = http.createServer((req, res) => {
    res.write('<h1> Hello Node!</h1>');
    res.end('<p>Hello Server</p>');

});

server.listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.')
})

server.on('error', (error) => {
    console.log(error);
})