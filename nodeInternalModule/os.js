const os = require('os');

console.log('운영체제 정보 ---------------');
console.log('os.arch():', os.arch()); //process.arch와 동일 //x64
console.log('os.platform();', os.platform()); // win32 // process.platform 과 동일
console.log('os.type():', os.type()); //Windows_NT //운영체제 종류
console.log('os.uptime():', os.uptime()); //144607 //운영체제 부팅이후 흐른 시간.
console.log('os.hostname', os.hostname())//LAPTOP-8BO0ROB9 //컴퓨터 이름
console.log('os.release()', os.release()); //10.0.18362 운영체제 버전
console.log('경로 ------------------');
console.log('os.homedir():', os.homedir()); //C:\Users\sweet // 홈디렉토리
console.log('os.tmpdir():', os.tmpdir()); //C:\Users\sweet\AppData\Local\Temp //임시 파일 저장 경로

console.log("CPU 정보 -------------------");
console.log('os.cpus():', os.cpus()); //컴퓨터의 코어 정보.
console.log('os.cpus().length:', os.cpus().length); //8

console.log('메모리 정보------------------');
console.log('os.freemem():', os.freemem()); //3748990976 사용가능한 메모리 (RAM)을 보여줍니다.
console.log('os.totalmem():', os.totalmem()); //8472485888 전체 메모리 용량





