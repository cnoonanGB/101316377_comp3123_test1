var resolvedPromise = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('delayed success!');
    }, 500)
})

resolvedPromise.then(() => {
    console.log({'message': 'delayed success!'});
})

var rejectedPromise = new Promise((reject) => {
    setTimeout(() => {
        reject(Error('delayed exception!'));
    }, 500)
})

rejectedPromise.then(() => {
    console.log({'error': 'delayed exception!'});
})
