import {addSum, multiply, substraction} from '../index';
import {expect} from 'chai';

describe('check for functions', () => {
    it('should verify that add sum function works well', (done) => {
        expect(addSum(2, 5), 'Function is getting false result').to.eql(7);
        done();
    })
    it('should verify that multiply function works well', (done) => {
        expect(multiply(2, 5), 'Function is getting false result').to.eql(10);
        done();
    })

    it('should verify that substraction function works well', (done) => {
        expect(substraction(2, 5), 'Function is getting false result').to.eql(-3);
        expect(substraction(2, 5), 'Function is getting false result').to.not.eql(8);
        done();
    })
})