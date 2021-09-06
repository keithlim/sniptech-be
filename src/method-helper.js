// [a-zA-Z0-9] string
const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// converting base10 to base62
function getShortUrl(id) {
    let values = [];

    while (id > 0) {
        remainder = id % 62;
        id = Math.floor(id / 62);
        values.unshift(remainder);
    }
    // console.log(`workings: ${values}`)

    let shortUrl = ""
    values.forEach(
        (v) => {
            shortUrl += (BASE62.charAt(v));
        }
    );
    // console.log(`Base62 Value: ${shortUrl}`);

    return shortUrl;
}

// converting base62 to base10
function getLongUrlPK(shorturl) {
    i = 0;
    result = 0;

    while (i < shorturl.length) {
        counter = i + 1;
        mapped = getIndex(shorturl.charAt(i));
        result = result + mapped * Math.pow(62, shorturl.length - counter);
        i++;
    }

    return result;
}

// retrieving the index of the value in BASE62 string
function getIndex(value) {
    if (!isNaN(value * 1)) {
        return BASE62.charAt(value);
    }
    if (value === value.toUpperCase()) {
        return 35 + value.charCodeAt(0) - 64;
    }

    return 9 + value.charCodeAt(0) - 96;
}

module.exports = {
    getShortUrl,
    getLongUrlPK
};