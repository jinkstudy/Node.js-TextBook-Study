const odd = "홀수입니다.";
const even = "짝수입니다.";

// module.exports = {
//     odd,
//     even
// }

//위와 같은것! exports와 module.exports가 같은 객체를 참조함.
exports.odd = "홀수입니다!";
exports.even = "짝수입니다!";

console.log(exports === module.exports) //true