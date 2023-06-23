import Rate from "../../domain/rates/Rate/Rate";

// Can take an arbitrary number of parameters.
// Recursively inspects elements that are arrays.
// Return: true if all elements are Rate objects,
// false otherwise.
function verifyRates(...rates) {

    // Empty arrays return false no matter
    // how deeply nested.    
    if(!rates.length) {
        return false
    }

    for(const rate of rates) {
        if(rate instanceof Array){
            if(!verifyRates(...rate))
                return false;
        }else if(!(rate instanceof Rate)) {
            return false
        }
    }
    return true;
}

export {
    verifyRates,
}
