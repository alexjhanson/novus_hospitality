import { isNonNegativeInt } from "./number_utils";

describe('number utilities', () => {

    describe('isNonNegativeInt()', () => {

        test('returns true if value is >= 0', () => {
            expect(isNonNegativeInt(0)).toBe(true);
            expect(isNonNegativeInt(4)).toBe(true);
        });

        test('returns false if value is negative or not an int', () => {
            expect(isNonNegativeInt('0')).toBe(false);
            expect(isNonNegativeInt('1')).toBe(false);
            expect(isNonNegativeInt(-5)).toBe(false);
            expect(isNonNegativeInt([])).toBe(false);
            expect(isNonNegativeInt({})).toBe(false);
            expect(isNonNegativeInt(34.56)).toBe(false);
        });
    });
});