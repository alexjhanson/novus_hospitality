import { InvalidArgumentError, IllegalArgumentError } from "../../domain/errors/Errors";

/*
 * Parse strings that represent currency figures.
 * Strings inputs can have an arbitrary amount of whitesapce
 * on either side of the amount. After removing whitespace
 * the string format should be 0 or 1 none ASCII digit
 * characters followed by at least 1 to a maximum of 3 digits,
 * followed by 0 or more groups of a comma with 3 digits,
 * followed by an optional fractional part starting with
 * a . and two digits.
 * input: '   $12,123,434.12  '
 * return: {dollar: 12123434, cents: 12}.
 * assumes , as thousands seperator.
*/
function parseCurrency(amount) {

    if(typeof amount !== 'string')
        throw new IllegalArgumentError('expected rate specifed as a string');

    // Define currency format.
    const regex = /^\D?(?:\d{1,3}(?:,\d{3})*)(?:\.\d{2})?$/;

    // Strip whitespace from input string.
    amount = amount.trim();

    if(!regex.test(amount))
        throw new InvalidArgumentError('Invalid currency string format');

    // Strip commas.
    amount = amount.replace(/,/g, '');

    // Split on non digit characters.
    let tokens = amount.split(/\D+/);

    const dollars = parseInt(tokens[1]);
    const cents = tokens.length > 2 ? parseInt(tokens[2]) : 0;

    return {
        dollars,
        cents 
    };
}

export {
    parseCurrency
}

