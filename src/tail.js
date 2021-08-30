// appends element at index of list to resultList
const copyList = (toList, startIndex, fromList) => {
    if (!fromList[startIndex]) {
        return toList;
    }

    toList.push(fromList[startIndex]);
    return copyList(toList, startIndex+1, fromList);
}


const tail = (list) => {
    return copyList([], 1, list);
}
module.exports = tail;