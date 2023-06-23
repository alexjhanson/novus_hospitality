
function isNonNegativeInt(value) {
    return Number.isInteger(value) && value >= 0;
}

function isIntString(value) {
    return Number.isInteger(value) ||
        (typeof value === 'string' && /^\-?\d+$/.test(value))
}

function isNonNegativeIntString(value) {
    return isIntString(value) && parseInt(value) >= 0;
}

export {
    isNonNegativeInt,
    isIntString,
    isNonNegativeIntString
}