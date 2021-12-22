//변수의 정의와 선언이 따로 있음
var var1; //var 키워드는 사용하지 않는 것이 좋음
let var2;

//변수의 정의
var2 = 10;
console.log(var2);

//자료의 타입
console.log(typeof 10);
console.log(typeof 10.0);
console.log(typeof 'hello'); //문자열 타입
console.log(typeof true);

//파이썬에서는 없는 타입
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN); //Not a Number
console.log(typeof Infinity);

//연산자
//몫 연산자는 없음
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 % 3);
console.log(2 ** 3);

//파이썬에는 없는 연산자
//증감연산자
let number = 2;

//전위식과 후위식의 차이
//전위식은 증가 먼저하고 나머지 명령을 수행
console.log(++number)
console.log(--number);


number = 2;

//후위식은 명령을 처리하고 나중에 1을 증가/감소
console.log(number++);
console.log(number);

//비교연산자
//자바 스크립트는 비교할 때 타입은 고려하지 않음
console.log(1=='1');

//자바 스크립트에서 타입까지 함께 고려해서 비교
console.log(1==='1');

//논리연산자
//&&(and), ||(or), !(not)
console.log(true && false);
console.log(true || false);
console.log(!true);

//윤년구하기
//연도가 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어지면 윤년
let year = 2000;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("윤년");
}
else
    console.log("아님");

let q;
q = 3/2;
console.log(q)
q = parseInt(q);
console.log(q);

//배열과 반복
//자바스크립트는 배열이라는 타입(파이썬의 리스트와 동일)

//let array = []; //빈 배열 객체
//let array = Array(); //Array 클래스의 생성자를 이용해서 객체 생성
let array = new Array(); //new 연산자를 이용한 Array객체 생성

array = [10,20,30,40];
console.log(array);
console.log(array[0]);

//파이썬의 append와 같은 역할
array.push(50);
console.log(array);

//인덱스 범위를 넘어가는 경우
console.log(array[10]);

//자바 스크립트는 배열의 원소 추가가 이렇게도 됨
array[10] = 100;
console.log(array);

//자바 스크립트는 배열을 파이썬 dict처럼 사용 가능
//연관배열이라고 표현

let arr=[];
arr['first'] = 10;
console.log(arr);

//for, while, for each
//파이썬의 for와는 완전히 다른 문법
//while의 또 다른 표현 정도

//1부터 10까지 반복
let i =1;
while(i<=10){
    console.log(i);
    i++
}

for(let i=1; i<=10; i++){
    console.log(i);
}

//파이썬의 for loop와 동일한 동작을 하는 for each
console.log(array);
for(let x of array){
    console.log(x);
}

//1부터 n까지의 총합
let n = 20;
let sum = 0;
for(let i=1; i<=n; i++){
    sum+=i;
}
console.log(sum);

//자바스크립트 함수의 기능은 동일
//자바스크립트는 'function' 키워드로 함수를 정의

function func(a,b){
    return a + b;
}

console.log(func(10,20));

//가변인자
function add(){
    //가변인자 객체가 따로 존재
    //console.log(arguments);
    let sum = 0;
    for(let i=0; i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

ret = add(1,2,3,4,5,6,7,8,9,10);
console.log(ret)

//디폴트 파라미터
function func2(a,b=2){
    console.log(a,b);
}

func2();

class Person{
    //필드 선언(public과 private)
    //속성 앞에 '#'을 붙여서 private 설정
    #name;
    #age;

    //파이썬의 클래스 변수와 같은 기능
    static nation = 'Korea';

    //생성자
    constructor(name, age){
        //this는 파이썬의 self와 같은 역할
        // 따로 파라미터를 정하지 않아도 항상 정의되어 있음
        this.#name = name;
        this.#age = age
    };

    //정적 메소드
    static staticMethod(){
        console.log(Person.nation);
    }

    //getter & setter
    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    //class 내에서 메소드를 정의할 때는 `function` 키워드는 생략
    info(){
        console.log(this.#name, this.#age)
    }
}

//객체생성
object = new Person('장동건',22);
object.info();

//은닉성
//외부에서는 접근 불가능
// Object.#name = '원빈';

//정적(static) 변수는 클래스 이름으로 접근가능
console.log(Person.nation);
Person.staticMethod();

//getter와 setter를 사용하는 방법은 파이썬과 동일
object.name = '원빈';
console.log(object.name);
object.info();