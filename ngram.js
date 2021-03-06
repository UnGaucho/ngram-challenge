const stripe = (str) => str.match(/[^_\W]+/g).join(' '); // Exclusion regex stripes anything not word or underscore

function ngram(str, len) {
    str = stripe(str);

    const tokens = str.split(' ');

    if (len == undefined) {
        len = tokens.length;
    } else if (!len) {
        return [];
    }

    const arr = [];

    for (let start = 0; start < tokens.length; start++) {
        arr.push([]);

        for (let end = start; end < tokens.length && end - start < len; end++) {
            arr[start].push(tokens.slice(start, end + 1).join(' '));
        }
    }

    return arr.flat();
}

if (typeof require !== 'undefined' && require.main === module) {
    length = parseInt(process.argv[2],10)
    args = process.argv.slice(3).join(' ');
    console.log(ngram(args, length))
}

module.exports = ngram