import * as numUtils from "./number_utils";

describe('number utilities', () => {

    describe('isNonNegativeInt()', () => {

        test('returns true if value is >= 0', () => {
            expect(numUtils.isNonNegativeInt(0)).toBe(true);
            expect(numUtils.isNonNegativeInt(4)).toBe(true);
        });

        test('returns false if value is negative or not an int', () => {
            expect(numUtils.isNonNegativeInt('0')).toBe(false);
            expect(numUtils.isNonNegativeInt('1')).toBe(false);
            expect(numUtils.isNonNegativeInt(-5)).toBe(false);
            expect(numUtils.isNonNegativeInt([])).toBe(false);
            expect(numUtils.isNonNegativeInt({})).toBe(false);
            expect(numUtils.isNonNegativeInt(34.56)).toBe(false);
        });
    });

    describe('isIntString()', () => {

        test('return true if parameter is an int or string represention of an int', () => {
            expect(numUtils.isIntString("8746")).toBe(true);
            expect(numUtils.isIntString(897)).toBe(true);
            expect(numUtils.isIntString(-97)).toBe(true);
            expect(numUtils.isIntString("-34")).toBe(true);
        });

        test('return false if parameter is not an int or string represention of an int', () => {
            expect(numUtils.isIntString("string")).toBe(false);
            expect(numUtils.isIntString(89.7)).toBe(false);
        });
    });

    describe('isNonNegativeIntString()', () => {

        test('return true if parameter is an int >= 0 or string represention of an int >= 0', () => {
            expect(numUtils.isIntString("0")).toBe(true);
            expect(numUtils.isIntString(0)).toBe(true);
            expect(numUtils.isIntString("34")).toBe(true);
        });

        test('return false if parameter is not an int >= 0 or string represention of an int >= 0', () => {
            expect(numUtils.isNonNegativeIntString("string")).toBe(false);
            expect(numUtils.isNonNegativeIntString(89.7)).toBe(false);
            expect(numUtils.isNonNegativeIntString(-14)).toBe(false);
            expect(numUtils.isNonNegativeIntString("-34")).toBe(false);
        });
    });

});