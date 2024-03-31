'use client'

import Nav from '../../components/nav/Nav';

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




export default function CalendarPage() {

    const [modalOpen, setModalOpen] = useState(false)
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);
    const [selectedEventId, setSelectedEventId] = useState("")
    const [loading, setLoading] = useState(true);
    const headers = {
        'Content-Type': 'application/json'
    }


    useEffect(() => {
        handleDatesSet({
            start: moment().startOf('month'),
            end: moment().endOf('month')
        });
    }, []);


    useEffect(() => {
        let calendarApi = calendarRef.current?.getApi();
        console.log("calendarApi:", calendarApi)

        const getAllEvents = async () => {
            const { data } = await axios.get('http://localhost:8000/events', { headers })
            console.log('data:', data)
            const myEvent = []
            data?.map(event => {
                const customEvent = {
                    start: event["start_time"],
                    end: event["end_time"],
                    title: event["event_name"]
                }
                myEvent.push(customEvent)
            })
            setEvents(myEvent)
        }
        getAllEvents()
    }, [])



    const handleSelectChange = (e) => {
        setSelectedEventId(e.target.value);
    }



    const onEventAdded = async event => {
        let calendarApi = calendarRef.current.getApi();

        const eventParams = {
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        }

        calendarApi.addEvent(eventParams);
    };


    async function handleDatesSet(eventData) {
        try {
            const { title, start, end } = eventData;
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch events", error);
            setLoading(false);
        }
    }


    async function handleEventAdd() {
        const dbParams = {
            "event_name": localStorage.getItem('email'),
            "start_time": moment(event.start).toDate(),
            "end_time": moment(event.end).toDate(),
        }

        const { data } = await axios.post("http://localhost:8000/events", dbParams, { headers })

        console.log(data)
    }


    async function handleDeleteEvent() {
        if (!selectedEventId) {
            alert('Please select an event to delete.');
            return;
        }

        try {
            const response = await axios
                .delete(`http://localhost:8000/events/${selectedEventId}`);
            if (response.status === 200) {
                alert('Event deleted successfully');
                setEvents(events.filter(event => event.event_id !== selectedEventId));
                setSelectedEventId('');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete the event');
        }
    };


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

    // async function handleDatesSet(data) {
    //     const response = await axios.get(
    //         "/api/calendar/get-events?start=" 
    //         + moment(data.start).toISOString() 
    //         + "&end=" + moment(data.end).toISOString
    //         )
    //     setEvent(response.data)
    // }
    //原始数据



    return (
        <article className="calendar">
                     <Nav />

            <div className="calendar-container">
                <div className="events-editing-container">
                    <button
                        className="add-class"
                        onClick={() => setModalOpen(true)}
                    >
                        Add Class
                    </button>

                    <select
                        onChange={handleSelectChange}
                        value={selectedEventId}
                    >
                        <option value="">Select an class</option>
                        {events.map((event) => (
                            <option key={event.event_id} value={event.event_id}>
                                {`${event.title} - ${moment(event.start).format('ddd M/D H:mm')} to ${moment(event.end).format('H:mm')}`}                                </option>
                        ))}
                    </select>

                    <button
                        className="delete-class"
                        onClick={handleDeleteEvent}
                    >
                        Delete Class
                    </button>
                </div>

                <div className='fullCalender' style={{ position: "relative", zIndex: 0 }}>
                    <Fullcalendar
                        ref={calendarRef}
                        events={events}
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
