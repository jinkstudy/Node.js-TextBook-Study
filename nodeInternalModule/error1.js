setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!!'); //일부러 에러 발생시킴
    } catch (err) {
        console.error(err);
    }
}, 1000);