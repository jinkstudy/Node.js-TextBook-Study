// setTimeOut(callback,ms), setInterVal(callback,ms), setImmediate(callback)
// clearTimeOut(id),clearInterval(id),clearImmediate(id)
// 위의 함수들에 대해서 알아보자!!

const timeout = setTimeout(() => {
    console.log('1.5초 후 실행')
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 실행')
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.')
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2); // setTimeOut 취소
    clearInterval(interval); // setInterval 취소
}, 2500);

//결과
//1.5초 후 실행
//1.5초 마다 실행

const immediate = setImmediate(() => {
    console.log('즉시 실행');
})
//결과
//즉시실행
//1초 마다 실행
//1.5초 후 실행
// 1초 마다 실행


const immediate2 = setImmediate(() => {
    console.log("실행되지 않습니다.");
})
//결과
//즉시실행
//실행되지 않습니다.
//1초 마다 실행
//1.5초 후 실행
//1초 마다 실행


clearImmediate(immediate2);

//결과
// 즉시 실행
// 1초 마다 실행
// 1.5초 후 실행
// 1초 마다 실행