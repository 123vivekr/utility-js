
// get minimum element in list starting with startIndex
const getMin = (list, startIndex) => {
    if(!list[startIndex]) {
        return null;
    }
    
    var nextElement = getMin(list, startIndex + 1);
    if (nextElement) {
        if (nextElement < list[startIndex]) {
            return nextElement;
        }
    }

    return list[startIndex];
}

const min = (list) => {
    return getMin(list, 0);
}
module.exports = min;