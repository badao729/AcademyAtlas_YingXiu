'use client'

import NavButton from "../../components/navigation/navButton"
import './calendar.scss'
// import Calendar from './Calendar'
import { useState, useRef } from "react"
import axios from "axios"
import AddClass from "./AddClass"
import moment from "moment"

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";





export default function CalendarPage() {

    const [modalOpen, setModalOpen] = useState(false)
    const [event, setEvent] = useState([])
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start:moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title:event.title
        });

    };

    async function handleEventAdd(data) {
        await axios.post("/api/calendar/create-event", data.event)
    }

    async function handleDatesSet(data) {
        const response = await axios.get(
            "/api/calendar/get-events?start=" 
            + moment(data.start).toISOString() 
            + "&end=" + moment(data.end).toISOString
            )
        setEvent(response.data)
    }


    return (
        <article className="calendar">
            <NavButton />

            <button onClick={() => setModalOpen(true)}>Add Class</button>

            <div style={{ position: "relative", zIndex: 0 }}>
                <Fullcalendar
                    ref={calendarRef}
                    events={event}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={"dayGridWeek"}
                    headerToolbar={{
                        start: "today prev,next",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    height={"90vh"}
                    eventAdd={event => handleEventAdd(event)}
                    datesSet={(date) => handleDatesSet(date)}
                />
            </div>

            <AddClass

                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={event => onEventAdded(event)} />

        </article>
    )
}