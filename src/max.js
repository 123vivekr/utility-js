// get maximum element in list starting with startIndex
const getMax = (list, startIndex) => {
    if(!list[startIndex]) {
        return null;
    }
    
    var nextElement = getMax(list, startIndex + 1);
    if (nextElement) {
        if (nextElement > list[startIndex]) {
            return nextElement;
        }
    }

    return list[startIndex];
}

const max = (list) => {
    return getMax(list, 0);
}
module.exports = max;