const map = require('./map');

function cube(n) {
    return n * n * n;
}

function identity(n) {
    return n;
}

describe('Map', () => {

    it('map([], cube) should give []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });

    it('map([1,2,3], cube) should give [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('map([{x : 10}],someObject => someObject.x + 1) should give [11]', () => {
        expect(map([{x: 10}],someObject => someObject.x + 1)).toEqual([11]);
    });

})

