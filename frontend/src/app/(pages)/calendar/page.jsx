'use client'

import NavButton from "../../components/navigation/navButton"
import Logout from "../../components/logout/logout"
import './calendar.scss'
import Calendar from './Calendar'




export default function CalendarPage() {






    return (
        <article className="calendar">
            <NavButton />
            <Logout />
            <div >Calendar</div>
            <Calendar />

        </article>
    )
}