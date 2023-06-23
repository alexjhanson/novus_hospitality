// Returns true if date is a string representing
// a valid date or is an instance of Date.
export function isValidDate(date) {

    if(typeof date === 'string') {
        date = new Date(date);
    }
    if(!(date instanceof Date) || isNaN(date))
        return false;

    return true;
}
