import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Lottie from "lottie-react";
import loadingAnima from "../../../assets/animation/loading-animation.json";
import AddClass from "./AddClass"; 


// 初始化 Supabase 客户端
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function CalendarPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        fetchEvents();
    }, []);


    const fetchEvents = async () => {
        setLoading(true);

        try {
            const { data, error } = await supabase.from('Timetable').select("*");

            if (error) {
                throw error;
            }

            const formattedEvents = data.map(event => ({
                id: event.courseId.toString(),
                title: `Stu: ${event.studentId} Teacher: ${event.teacherId}`,
                start: event.startTime,
                end: event.endTime,
            }));

            setEvents(formattedEvents);

        } catch (error) {
            console.error("Failed to fetch events", error);
        }
        setLoading(false);
    };


    const handleEventAdd = async (eventData) => {
        try {
            const { title, start, end } = eventData;
            const { data, error } = await supabase.from('Timetable').insert([
                { startTime: start, 
                    endTime: end, 
                    studentId: 1, 
                    teacherId: 1, 
                    title }
            ]);

            if (error) {
                throw error;
            }

            fetchEvents();

        } catch (error) {
            console.error("Error adding event", error);
        }
    };


    if (loading) {
        return <Lottie animationData={loadingAnima} loop autoplay />;
    }

    

    return (
        <div className='calendar-container'>
            <button onClick={() => setModalOpen(true)}>Add Class</button>
            <FullCalendar
                events={events}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                eventAdd={({ event }) => handleEventAdd(event)}
                editable={true}
                selectable={true}
            />
            {modalOpen && <AddClass onClose={() => setModalOpen(false)} onEventAdded={handleEventAdd} />}
        </div>
    );
}
