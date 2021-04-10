function PromisePolyfill(callback) {
    successCb = function () { };
    errorCb = function () { };
    state = 'pending';
    // constructor(callback) {

    // }
    resolve = function (data) {
        console.log('resolved');
        state = 'fulfilled';
        this.successCb(data);
        return this;
    }
    reject = function () {
        console.log('rejected');
        state = 'rejected';
        this.errorCb();
        return this;
    }
    this.then = function (cb) {
        this.successCb = cb;
        return this;
    }
    this.catch = function (cb) {
        this.errorCb = cb;
        return this;
    }
    callback(resolve.bind(this), reject.bind(this));
    return this;
}

//// Usage of promise
new PromisePolyfill(function (res, rej) {
    setTimeout(function () { res(100) }, 1000);
}).then(function (data) {
    console.log('its resolved successfully ' + data)
}).catch(function () { console.log('got failed') });