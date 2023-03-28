/**
 * promise.all( [] ) => this takes an array of promises (any iterable) and returns a promise that resolves when all promises in the iterable argument have resolved or rejected with reason of the first passed promise that rejects
 * NB-> if an emply  array is passed ,then this method resolves immediatelly 
 */

const p1 =Promise.resolve(3);
const p2 =  42;
const p3 = new Promise(
    (reslove,reject)=>{
        setTimeout(reslove ,100,"foo")
    }
);

Promise.all([p1 ,p2,p3]).then(
    value =>console.log(value)
)
