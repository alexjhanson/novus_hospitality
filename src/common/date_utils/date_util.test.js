import { isValidDate } from "./date_utils";

describe('Test date utilities....', () => {

    describe('isValidDate(date)', () => {

        test('returns true if passed a valid date string or Date object', () => {
            const string = isValidDate('2023-4-15');
            const date = isValidDate(new Date('2023-4-15'));
            expect(string).toBe(true);
            expect(date).toBe(true);
        });

        test('return false if passed an invalid date string or Date object', () => {
            const string = isValidDate('2023-4-50');
            const date = isValidDate(new Date('2023-4-50'));
            expect(string).toBe(false);
            expect(date).toBe(false);
        });
    });
})