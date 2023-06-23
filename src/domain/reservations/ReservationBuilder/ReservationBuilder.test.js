import {InvalidStateError} from '../../errors/Errors';
import Reservation from '../Reservation/Reservation';
import ReservationBuilder from './ReservationBuilder';
// import Guest from '../../guests/Guest/Guest';
import Rate from '../../rates/Rate/Rate';

describe('Test ReservationBuilder Class', () => {

    describe('buildReservation()', () => {

        test('returns a reservation object when all required fields are set correctly', () => {

            let builder = new ReservationBuilder();

            builder.setCreateDate('2023-4-15')
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setGuestId('guest id')
                .setRates(new Rate('AAA', 235, 50));

            let result;

            try {
                result = builder.buildReservation();
            } catch {
                result = null;
            }

            expect(result).toBeInstanceOf(Reservation);
            expect(result).toEqual({
                _createDate: new Date('2023-4-15').toISOString(),
                _checkInDate: new Date('2023-4-17').toISOString(),
                _checkOutDate: new Date('2023-4-19').toISOString(),
                _guestId: 'guest id',
                _pets: 0,
                _children: 0,
                _adults: 2,
                _rates: [new Rate('AAA', 235, 50)],
                _dateModified: new Date('2023-4-15').toISOString(),
            })
        });

        test('throws an InvalidStateError if no required fields are set', () => {
            expect(() => new ReservationBuilder().buildReservation()).toThrow(InvalidStateError);
        });

        test('throws an InvalidStateError if at least one required field is not set', () => {

            // Leave out Guest ID.
            expect(() => {
                new ReservationBuilder().setCreateDate('2023-4-15')
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setRates(new Rate('AAA', 235, 50))
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out Rates.
            expect(() => {
                new ReservationBuilder().setCreateDate('2023-4-15')
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setGuestId('guest id')
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out checkout date.
            expect(() => {
                new ReservationBuilder().setCreateDate('2023-4-15')
                .setCheckInDate(new Date('2023-4-17'))
                .setGuestId('guest id')
                .setRates(new Rate('AAA', 235, 50))
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out checkin date.
            expect(() => {
                new ReservationBuilder().setCreateDate('2023-4-15')
                .setCheckOutDate('2023-4-19')
                .setGuestId('guest id')
                .setRates(new Rate('AAA', 235, 50))
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out creation date.
            expect(() => {
                new ReservationBuilder().setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setGuestId('guest id')
                .setRates(new Rate('AAA', 235, 50))
                .buildReservation();
            }).toThrow(InvalidStateError);
        });
    });

});