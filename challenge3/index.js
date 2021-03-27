// Implement the getInParallel Function that should be used to invoke multiple API calls in parallel.
//The function accepts an array of function that return a Promise.
// The function should return a promise that should resolve to an array of result from the apiCalls argument.

function getInParallel(apiCalls) {
    return Promise.all(apiCalls.map(i => i()))
}
let promise = getInParallel([() => Promise.resolve("First API call!"),
() => Promise.resolve("Second API call!")]);

if (promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;