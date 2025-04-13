//var 재선언, 재정의 모두 가능
var a = 10
var a = "abc"
console.log(a)

var b //undefind
console.log(b)
b = "hello"

//let재선언(X), 재정의 가능
let c = 10
c = "abcsdsd"

//const 상수 :재선언 재정의 모두 불가능(초기값을 정해줘야 함)
const pi = 3.14

var isLogin = true //false

//여러개를 받는 타입
//1. 배열
var team = ["a", "b", "c"]
var one = team[0] //a

//2.오브젝트(Map) -> 키:값

var person = {
  name: "정민",
  age: 35,
  asset: ["노트북", "스마트폰", "볼펜"],
}

var name = person["name"]
var name = person.name

console.log(name)

var pen = person.asset[2]

alert(pen)
