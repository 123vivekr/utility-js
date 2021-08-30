// applies function to all elements in list starting from startIndex
const applyFunction = (list, startIndex, fn) => {
    if (!list[startIndex]) {
        return [];
    }

    list[startIndex] = fn(list[startIndex]);
    applyFunction(list, startIndex + 1, fn);
    return list;
}

const map = (list, fn) => {
    return applyFunction(list, 0, fn);
}
module.exports = map;