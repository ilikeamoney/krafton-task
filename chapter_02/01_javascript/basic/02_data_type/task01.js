// int, float

let a = 4.8;

console.log(a);

a = 4; b = 10;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a + 3 * b);

a = 5;
a = a + 3;
a += 1;
a++;
a--;
console.log(a);


// string
let word1 = "jungle";
let word2 = "coding";

let mac = "Mcdonald";
let sentence = "He said Hello";

let g = 3;
let y = "a";
let z = g;

console.log(g, y, z);

let fistname = "Harry";
let lastname = "Poter";

console.log(fistname + " " + lastname);

let v = "3";
let n = "5";

let k = v + n;
console.log(k);

let h = "jungle";
console.log(h.toUpperCase());

let mail = "hsat@gmail.com";

let qw = mail.split("@")[1].split(".")[0];
console.log(qw);

// boolean

let za = true;
let zb = false;

// 비교연산자
4 > 2      // true  크다
5 < 1      // false 작다
6 >= 5     // true  크거나 같다
4 <= 4     // true  작거나 같다
3 == 5     // false 같다
4 != 7     // true  같지 않다

let az = 4 > 2  // true
!az             // false    NOT 연산자로 참을 거짓으로, 거짓을 참으로 바꿔준다.

let bz = 2!=2   // false

az && bz         // false    AND 연산자로 모두 참이어야 참을 반환한다.
az || bz         // true     OR 연산자로 둘 중 하나만 참이면 참이다.