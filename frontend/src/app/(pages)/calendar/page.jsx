import NavButton from "@/app/components/navigation/navButton"
import './calendar.scss'
import Calendar from './Calendar'




export default function CalendarPage() {






    return (
        <article className="calendar">
            <NavButton />
            <div >Calendar</div>
            <Calendar />

        </article>
    )
}