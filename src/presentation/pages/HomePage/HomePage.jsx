import { useEffect } from "react"

export default function HomePage(props) {

    useEffect(() => {
        import('../../../application/reservation/reservation.js').then(() => {console.log('reservation bundle loaded!');})
    }, [])

    return (
        <div>
            Hello Brave New World!
        </div>
    )
}