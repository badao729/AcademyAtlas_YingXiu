'use client'


import loadingAnima from "../../../assets/animation/loading-animation.json"
import './calendar.scss'
import { useState, useRef, useEffect } from "react";
import axios from "axios"
import AddClass from "./AddClass"
import moment from "moment"
import Lottie from "lottie-react"

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export default function CalendarPage() {

    const [modalOpen, setModalOpen] = useState(false)
    const [event, setEvent] = useState([])
    const calendarRef = useRef(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        handleDatesSet({
            start: moment().startOf('month'),
            end: moment().endOf('month')
        });
    }, []);


    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();

        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    };





    async function handleDatesSet(eventData) {
        try {
            const { title, start, end } = eventData;
            const { eventData, error } = await supabase.from('Timetable').insert([
                {
                    startTime: start,
                    endTime: end,
                    studentId:title
                }
            ]);
            setEvent(eventData);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch events", error);
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <>
                <Lottie className="anima-loading" animationData={loadingAnima} />
            </>
        )
    }




    //原始数据
    // const onEventAdded = event => {
    //     let calendarApi = calendarRef.current.getApi();
    //     calendarApi.addEvent({
    //         start:moment(event.start).toDate(),
    //         end: moment(event.end).toDate(),
    //         title:event.title
    //     });

    // };

    // async function handleEventAdd(data) {
    //     await axios.post("/api/calendar/create-event", data.event)
    // }

    // async function handleDatesSet(data) {
    //     const response = await axios.get(
    //         "/api/calendar/get-events?start=" 
    //         + moment(data.start).toISOString() 
    //         + "&end=" + moment(data.end).toISOString
    //         )
    //     setEvent(response.data)
    // }


    // if (loading) {
    //     return (
    //         <>
    //             <Lottie className="anima-loading" animationData={loadingAnima} />
    //         </>
    //     )
    // }
    //原始数据



    return (
        <article className="calendar">
            <div className="calendar-container">
                <button className="addClass" onClick={() => setModalOpen(true)}>Add Class</button>

                <div className='fullCalender' style={{ position: "relative", zIndex: 0 }}>
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
                        height={"80vh"}
                        eventAdd={event => handleEventAdd(event)}
                        datesSet={(date) => handleDatesSet(date)}
                    />
                </div>
            </div>

            <AddClass
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={event => onEventAdded(event)} />

        </article>
    )
}