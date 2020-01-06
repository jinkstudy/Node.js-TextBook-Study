const buffer = Buffer.from('저를 버퍼로 바꿔보세요')
console.log('from():', buffer) //문자열을 버퍼로 바꿈
console.log('length:', buffer.length) // 길이
console.log('toString():', buffer.toString()); //버퍼를 다시 문자열로 바꿈


const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); // 배열안의 버퍼들을 하나로 합친다.
console.log('concat,from:', buffer2)
console.log('concat():', buffer2.toString())

const buffer3 = Buffer.alloc(5); //빈 버퍼 생성, 해당크기의 버퍼 생성 
console.log('alloc():', buffer3);