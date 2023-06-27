
function isNonNegativeInt(value) {
    return Number.isInteger(value) && value >= 0;
}

function isIntStr(value) {
    return Number.isInteger(value) ||
        (typeof value === 'string' && /^\-?\d+$/.test(value))
}

function isNonNegativeIntStr(value) {
    return isIntStr(value) && parseInt(value) >= 0;
}

function isPositiveIntStr(value) {
    return isIntStr(value) && parseInt(value) > 0;
}

export {
    isNonNegativeInt,
    isIntStr,
    isNonNegativeIntStr,
    isPositiveIntStr
}