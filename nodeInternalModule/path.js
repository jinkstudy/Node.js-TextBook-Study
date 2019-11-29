const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // \  경로 구분자이며 OS 마다 다름.
console.log('path.delimiter:', path.delimiter) //; // 환경변수의 구분자. 
// process.env.Path로 확인해보면 여러 환경변수가 ;로 구분되어있음
console.log('path.dirname():', path.dirname(string)); //C:\Users\sweet\workspace\nodejs_noteBook_study\nodeInternalModule
console.log('path.extname():', path.extname(string));// .js // 파일의 확장자
console.log('path.basename():', path.basename(string, path.extname(string)));//path //확장자를 뺀 파일명만 보여줌
console.log('path.parse():', path.parse(string)); // root,dir,base,ext,name으로 분리
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\sweet\\workspace\\nodejs_noteBook_study\\nodeInternalModule',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

console.log('path.format():', path.format({
    dir: 'C:\\Users\\sweet\\workspace\\nodejs_noteBook_study\\nodeInternalModule',
    ext: '.js',
    name: 'path'
})) // C:\Users\sweet\workspace\nodejs_noteBook_study\nodeInternalModule\path.js //하나로 합쳐줌

console.log('path.normalize():', path.normalize('C://users//sweet\\workspace'));
// '/' 나'\'를 섞어 쓴경우 하나로 통일 시켜준다.

console.log('path.isAbsolute():', path.isAbsolute('C:\\')); //true 파일 경로가 절대경로인지 알려준다.
console.log('path.isAbsolute():', path.isAbsolute('./home')); //false

console.log('path.relative():', path.relative(' C:\Users\sweet\workspace\nodejs_noteBook_study\nodeInternalModule\path.js', 'C:\\'));
//..\..\..\..\..\..  첫번째 경로에서 두번째 경로로 가는 방법을 알려준다.

console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/sweet'));
// C:\Users\sweet\workspace\users\sweet //하나의 경로로 만들어줌

console.log('path.resolve():', path.resolve(__dirname, '..', '..', '/users', '.', '/sweet'));
//C:\sweet  //resolve는 /를 만나면 절대경로로 인식해서 앞의 경로를 무시.