// applies filter to list starting from startIndex
const applyFilter = (list, startIndex, sieveFn) => {
    if(!list[startIndex]) {
        return [];
    }

    var value = list[startIndex]
    var resultList = [];

    if(sieveFn(value)) {
        resultList.push(value);
    }

    resultList = resultList.concat(applyFilter(list, startIndex + 1, sieveFn));
    return resultList;
}

const filter = (list, sieveFn) => {
    return applyFilter(list, 0, sieveFn);
}
module.exports = filter;