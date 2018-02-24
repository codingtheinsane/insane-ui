function timeOut(callBack, timeInSeconds) {
    setTimeout(callBack, timeInSeconds * 1000);
}

module.exports = {
    timeOut: timeOut
};
