setTimeout(() => {
    console.log('timer1')
}, 0);

requestAnimationFrame(() => {
    console.log('requestAnimationFrame')
});

setTimeout(() => {
    console.log('timer2')
}, 0);

new Promise(executor = (resolve) => {
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(() => {
    console.log('promise then')
});

console.log('end');

