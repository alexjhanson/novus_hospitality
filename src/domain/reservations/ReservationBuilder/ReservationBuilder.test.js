import {InvalidStateError} from '../../errors/Errors';
import Reservation from '../Reservation/Reservation';
import ReservationBuilder from './ReservationBuilder';
// import Guest from '../../guests/Guest/Guest';
import Rate from '../../rates/Rate/Rate';

describe('Test ReservationBuilder Class', () => {

    describe('buildReservation()', () => {

        const rates = new Rate('id', new Date().toISOString(),'AAA' ,'roomType', 235, 50, 'USD');

        test('returns a reservation object when all required fields are set correctly', () => {

            let builder = new ReservationBuilder();

            builder
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setRoomType('room type')
                .setRates(rates);

            let result;

            try {
                result = builder.buildReservation();
            } catch {
                result = null;
            }

            expect(result).toBeInstanceOf(Reservation);
            expect(result).toEqual({
                _id: null,
                _createDate: null,
                _checkInDate: new Date('2023-4-17').toISOString(),
                _checkOutDate: new Date('2023-4-19').toISOString(),
                _roomType: 'room type',
                _rates: [rates],
                _guestId: null,
                _adults: 2,
                _children: 0,
                _pets: 0,
                _dateModified: null,
            })
        });

        test('throws an InvalidStateError if no required fields are set', () => {
            expect(() => new ReservationBuilder().buildReservation()).toThrow(InvalidStateError);
        });

        test('throws an InvalidStateError if at least one required field is not set or has an invalid value', () => {

            // No adults.
            expect(() => {
                new ReservationBuilder()
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setRoomType('room type')
                .setRates(rates)
                .setNumAdults(0)
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out Rates.
            expect(() => {
                new ReservationBuilder()
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setRoomType('room type')
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out checkout date.
            expect(() => {
                new ReservationBuilder()
                .setCheckInDate(new Date('2023-4-17'))
                .setRoomType('room type')
                .setRates(rates)
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out checkin date.
            expect(() => {
                new ReservationBuilder()
                .setCheckOutDate('2023-4-19')
                .setRoomType('room type')
                .setRates(rates)
                .buildReservation();
            }).toThrow(InvalidStateError);

            // Leave out room type.
            expect(() => {
                new ReservationBuilder()
                .setCheckInDate(new Date('2023-4-17'))
                .setCheckOutDate('2023-4-19')
                .setRates(rates)
                .buildReservation();
            }).toThrow(InvalidStateError);

        });
    });

});