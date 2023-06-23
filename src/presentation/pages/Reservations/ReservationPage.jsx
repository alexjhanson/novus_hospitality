

export default function ReservationPage() {

    useEffect(() => {

        import('../../..application/reservation/reservation.bundle.js').then(() => {console.log('reservations module loaded');})
      
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

}