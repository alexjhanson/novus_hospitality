import Rate from "../../domain/rates/Rate/Rate";
import { verifyRates } from "./rate_utils";

describe("Rate utils functions", () =>{

    describe("verifyRates()", () => {

        const date = new Date().toISOString();

        const rate1 = new Rate('id', date ,'AAA' ,'roomType', 230, 50, 'USD');
        const rate2 = new Rate('id', date ,'BAR' ,'roomType', 255, 25, 'USD');
        const rate3 = new Rate('id', date ,'DISC' ,'roomType', 220, 45, 'USD');
        const rate4 = new Rate('id', date ,'PROMO' ,'roomType', 205, 15, 'USD');

        test('return true given and array of Rates and or an arbitrary amount of individual Rate parameters', () => {
            expect(verifyRates([rate1, rate2, rate3])).toBe(true);
            expect(verifyRates(rate1, rate2, rate2)).toBe(true);
            expect(verifyRates(rate1, rate2, [rate3, rate4])).toBe(true);
        });

        test('return false given an empty arrary, no arguments, or a nested empty array', () => {
            expect(verifyRates([])).toBe(false);
            expect(verifyRates()).toBe(false);
            expect(verifyRates(rate1, [], rate2)).toBe(false);
        });

        test('return false if the input has an item that is not a Rate.', () => {
            expect(verifyRates([rate1, 'string value', rate2, rate3])).toBe(false);
            expect(verifyRates(rate1, rate2, rate3, 'string value')).toBe(false);
        });
    })

});