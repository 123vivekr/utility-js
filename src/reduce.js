const collator = (list, startIndex, collatorFn) => {
    if(!list[startIndex]) {
        return undefined;
    }

    var nextElement = collator(list, startIndex + 1, collatorFn);

    if(nextElement) {
        return collatorFn(list[startIndex], nextElement);
    }

    return list[startIndex];
}

const reduce = (list, collatorFn, prefix) => {
    var listString = collator(list, 0, collatorFn);
    if(!prefix) {
        return listString;
    } 
    
    if(!listString) {
        return prefix;
    } 

    return prefix + listString;
}
module.exports = reduce;