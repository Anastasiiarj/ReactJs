// First Promise
function createPromiseRandom(min, max, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            var number = Math.round(Math.random()*(max-min) + min);
            if(min < max){
                resolve ('Random number is: ' + number);
            } else {
                reject('Error!')
            }
        }, delay);
    });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(function (result){
    alert(result);
});
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(function (error){
    alert(error);
});


// Second Promise
new Promise(function (resolve, reject) {
    let number = prompt("Enter number, please!", "");
    if (isNaN(number)){
        reject("This is not a number. Try again!");
    } else {
    resolve( "You enter " + number);
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        do {
            var number = prompt(error);
        } while (isNaN(number))
        resolve(number);
    });
}).then(function (result) {
    return new Promise(function (resolve, reject) {
        alert(result);
    });
});

// Third Generate
function* generateFibonacci() {
    let a = 1;
    yield a;
    let b = 1;
    yield b;
    for (let i=3;; i++){
    let c = a + b;
    a = b;
    b = c;
    yield c;
    }
}
let gen = generateFibonacci();
for (let i = 0; i < 10; i++) {
    console.log(gen.next().value);
}