// Implement the ensure function so that it throws error if called without arguments or the arguments is undefined.
// Otherwise it should return the given value

function ensure(value) {
    if (!value || value.length == 0) {
        throw new Error('Arguments value needed')
    }
    return value
}
try {
    console.log(ensure());
} catch (err) {
    console.log(err);
}