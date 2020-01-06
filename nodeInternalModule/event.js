const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트 1');
}) // addListener : on과 기능이 같음 , 이벤트 이름과 이벤트 발생 시의 콜백을 연결해줌
myEvent.on('event2', () => {
    console.log('이벤트2')
}) //addListenr와 기능 같음

myEvent.on('event2', () => {
    console.log('이벤트 2 추가')
}) // 동일 이벤트 이름에 이벤트 여러개 달아줄 수 있음.

myEvent.emit('event1'); // 이벤트를 호출하는 메서드. ==> 등록된 이름을 입력하면 호출해줌
myEvent.emit('event2');

myEvent.once('event3', () => { // 한번만 실행되는 메서드. 
    console.log('이벤트 3')
})
myEvent.emit('event3')
myEvent.emit('event3') // 실행안됨!

myEvent.on('event4', () => {
    console.log('이벤트 4')
})

myEvent.emit('event4');
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행안됨!

const listener = () => {
    console.log('이벤트 5')
}
const listener2 = () => {
    console.log('이벤트 5 두번째')
}

myEvent.on('event5', listener);
myEvent.on('event5', listener2)
myEvent.emit('event5')

myEvent.removeListener('event5', listener)
myEvent.emit('event5') // listener2에 대한 것만 나옴.

myEvent.off('event5', listener2) // removeListerner과 같음.
myEvent.emit('event5') //실행안됨

console.log(myEvent.listenerCount('event2')) // 해당 이벤트에 걸린 리스너의 갯수를 세어 준다