const tail = require('./tail')

describe('Tail', () => {
    it('tail([1,2,3]) should be [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('tail([]) should be []', () => {
        expect(tail([])).toEqual([]);
    });
})