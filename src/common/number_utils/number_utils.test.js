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

    describe('isIntStr()', () => {

        test('return true if parameter is an int or string represention of an int', () => {
            expect(numUtils.isIntStr("8746")).toBe(true);
            expect(numUtils.isIntStr(897)).toBe(true);
            expect(numUtils.isIntStr(-97)).toBe(true);
            expect(numUtils.isIntStr("-34")).toBe(true);
        });

        test('return false if parameter is not an int or string represention of an int', () => {
            expect(numUtils.isIntStr("string")).toBe(false);
            expect(numUtils.isIntStr(89.7)).toBe(false);
            expect(numUtils.isIntStr([])).toBe(false);
            expect(numUtils.isIntStr({})).toBe(false);
        });
    });

    describe('isNonNegativeIntStr()', () => {

        test('return true if parameter is an int >= 0 or string represention of an int >= 0', () => {
            expect(numUtils.isIntStr("0")).toBe(true);
            expect(numUtils.isIntStr(0)).toBe(true);
            expect(numUtils.isIntStr("34")).toBe(true);
            expect(numUtils.isIntStr(5)).toBe(true);
        });

        test('return false if parameter is not an int >= 0 or string represention of an int >= 0', () => {
            expect(numUtils.isNonNegativeIntStr("string")).toBe(false);
            expect(numUtils.isNonNegativeIntStr(89.7)).toBe(false);
            expect(numUtils.isNonNegativeIntStr(-14)).toBe(false);
            expect(numUtils.isNonNegativeIntStr("-34")).toBe(false);
            expect(numUtils.isNonNegativeIntStr([])).toBe(false);
            expect(numUtils.isNonNegativeIntStr({})).toBe(false);
        });
    });

    describe('isPositiveIntStr()', () => {

        test('return true if parameter is an int > 0 or a string representation of an int > 0', () => {
            expect(numUtils.isPositiveIntStr("3")).toBe(true);
            expect(numUtils.isPositiveIntStr(5)).toBe(true);
        });

        test('return false if parameter is an int <= 0 or a string representation of an int <= 0', () => {
            expect(numUtils.isPositiveIntStr("-3")).toBe(false);
            expect(numUtils.isPositiveIntStr(-5)).toBe(false);
            expect(numUtils.isPositiveIntStr("0")).toBe(false);
            expect(numUtils.isPositiveIntStr(0)).toBe(false);
        });
    });
});