import { IllegalArgumentError } from "../../errors/Errors";
import Rate from "./Rate";

describe('Test Rate class', () => {

    describe('Rate()', () => {

        test('zero arg constructor creates default Rate', () => {
            const rate = {
                _type: 'custom',
                _dollar: 0,
                _cents: 0
            };

            expect(new Rate()).toEqual(rate);
        });

        test('Rate(string,string,string) creates valid Rate', () => {
            const rate = {
                _type: 'AAA',
                _dollar: 123,
                _cents: 45
            }

            expect(new Rate('AAA', '123', '45')).toEqual(rate);
        });

        test('Rate(string,int,int) create valid Rate', () => {
            const rate = {
                _type: 'AAA',
                _dollar: 123,
                _cents: 45
            }

            expect(new Rate('AAA', 123, 45)).toEqual(rate);
        });

        test('throw IllegalArgumentError for negative numbers and non numeric strings', () => {
            expect(() => new Rate('custom', 'string', 50)).toThrow(IllegalArgumentError);
            expect(() => new Rate('custom', -1, 50)).toThrow(IllegalArgumentError);
            expect(() => new Rate('custom', 34, 'string')).toThrow(IllegalArgumentError);
            expect(() => new Rate('custom', 34, -50)).toThrow(IllegalArgumentError);
        });
    });
})