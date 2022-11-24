// Promise -предназаначен для выполнения операций в асинхронном режиме

const p = new Promise((resolve, reject) => {
// resolve и reject - это функции
// мы вызываем функуию resolve если вход выполнился успешно(с нашей точки зрения)
// мы вызываем функуию reject если вход выполнился с ошибкой(с нашей точки зрения)
setTimeout(()=>{
    console.log('Hello from Promise!');
  //  resolve([1,2,3,4]);//success
  reject('some error'); //failed
},1000);


});
// вызов метода p.then() у объекта Promis-a, запускает его код на выполнение
p.then((arr) => {
    // эта лямбда вызовется тогда, когда внутри тела Promis-a будет вызвана ф-я resolve()
    console.log(arr);
    return arr.reduce((p,c) => p + c);
})
.catch((err) => {
// эта лямбда вызовется тогда, когда внутри тела Promis-a будет вызвана ф-я reject()   
console.log(err); 
})
.then((a) => {
    console.log(a);
    throw 'AAAAAAA!';//специально ломаем программу
}).catch((err) => console.log(err));
console.log('hi!');
// await, async
async function test(){
    console.log('test');
    return 120; // resolve(120);
}
// async функция фвсегда возвращает объект Promis-a
const w = test();
w.then ((a) => console.log(a));
console.log(w);

// await заставляет ждать выполнения Promis-a(именно вызова функции resolve)
// await нельзя использовать вне контекста ассинхронной функции
// await можно использовать только внутри ассинхронной функции, либо лямбды

async function test2() {
    const v =  await test();
    console.log(v);
}
test2();


 // http, https -названия протоколов
 // Hyper Text Transfer Protocol (Security)
 
 // JSON - JavaScript Object Notation
 /*
 {} - задают объект 
 []- задают массив

внутри {}: - свойства;
{
    "name": "Vasya", 
    "age": 12.5,
    "drinks": ["Cola", "Pepsi"],
    "isAdmin": true,
    "photo": null,
    "order": {
        "product": "pepsi",
        "price": 12.22
    }
} 
 */

// JSON -> JavaScript Object
const s = `{"age": 12, "name": "Vasta"}`;
const user = JSON.parse(s);
console.log(user);

//JavaScript Object  -> JSON
const cat = {
age:12,
color: 'red',
vac:[true, 1, 'SputnicV','V2'],
};
const j = JSON.stringify(cat);
console.log(j);


// Асинхронные запросы
async function loadCurrencies(){
    const res = await fetch('https://www.nbrb.by/api/exrates/currencies');
    console.log(res);
    const currencies = await res.json();
    console.log(currencies)
}
loadCurrencies();