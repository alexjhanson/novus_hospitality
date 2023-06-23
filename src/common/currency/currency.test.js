import { InvalidArgumentError } from "../../domain/errors/Errors";
import { parseCurrency } from "./currency";

describe('currency utils....', () => {

    describe('parseCurrency()', () => {

        test('throws InvalidArgumentError for invalid string formats', () => {
            expect(() => parseCurrency("12.345")).toThrow(InvalidArgumentError);
            expect(() => parseCurrency("abc123")).toThrow(InvalidArgumentError);
            expect(() => parseCurrency("123.")).toThrow(InvalidArgumentError);
            expect(() => parseCurrency("123.1")).toThrow(InvalidArgumentError);
            expect(() => parseCurrency("12,2345,123.14")).toThrow(InvalidArgumentError);
        });

        test('returns object {dollar: int, cents: int} for valid string formats', () => {
            const amounts = ['$1,754,234.45', '$1,234', '$34', '$45.23'];
            const results = [{dollars: 1754234, cents: 45}, 
                    {dollars: 1234, cents: 0},
                    {dollars: 34, cents: 0},
                    {dollars: 45, cents: 23}];

            expect(parseCurrency(amounts[0])).toEqual(results[0]);
            expect(parseCurrency(amounts[1])).toEqual(results[1]);
            expect(parseCurrency(amounts[2])).toEqual(results[2]);
            expect(parseCurrency(amounts[3])).toEqual(results[3]);
        });
    });
});