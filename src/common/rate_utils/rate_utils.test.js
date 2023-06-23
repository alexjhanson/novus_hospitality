import Rate from "../../domain/rates/Rate/Rate";
import { verifyRates } from "./rate_utils";

describe("Rate utils functions", () =>{

    describe("verifyRates()", () => {

        test('return true given and array of Rates and or an arbitrary amount of individual Rate parameters', () => {
            expect(verifyRates([new Rate(), new Rate(), new Rate()])).toBe(true);
            expect(verifyRates(new Rate(), new Rate(), new Rate())).toBe(true);
            expect(verifyRates(new Rate(), new Rate(), [new Rate(), new Rate()])).toBe(true);
        });

        test('return false given an empty arrary, no arguments, or a nested empty array', () => {
            expect(verifyRates([])).toBe(false);
            expect(verifyRates()).toBe(false);
            expect(verifyRates(new Rate(), [], new Rate())).toBe(false);
        });

        test('return false if the input has an item that is not a Rate.', () => {
            expect(verifyRates([new Rate(), 'string value', new Rate(), new Rate()])).toBe(false);
            expect(verifyRates(new Rate(), new Rate(), new Rate(), 'string value')).toBe(false);
        });
    })

});