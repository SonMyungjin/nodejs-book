const {odd, even} = require('./var');

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

// module.exports은 파일에서 단 한 번만 사용 가능
module.exports = checkOddOrEven;