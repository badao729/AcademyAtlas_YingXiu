import React, { useState,useEffect } from "react";
import Modal from "react-modal"
import Datetime from 'react-datetime'

import './AddClass.scss'
import NavButton from "../../components/navigation/navButton";
import axios from 'axios'
import '../../../styles/partials/_datetime.scss'




// const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );



export default function ({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [students, setStudents] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }


    useEffect(() => {
        async function fetchStudents() {
            const { data } = await axios.get(
                `http://localhost:8000/users`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const studentLists = []
            data.map(student => studentLists.push(`${student.firstName} ${student.lastName}`))
            setStudents(studentLists)
        }
        fetchStudents();
    }, []); 



    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <select
                    placeholder="Student Name"
                    value={title}
                    onChange={e => setTitle(e.target.value)}>

                    <option value="">Select a Student</option>

                    {students?.map((student, index) => (
                        <option
                            key={index}
                            value={student}
                        >
                            {student}
                        </option>
                    ))}

                </select>

                <div>
                    <label>Start:</label>
                    <Datetime
                        value={start}
                        onChange={date => setStart(date)} />
                </div>

                <div>
                    <label>End:</label>
                    <Datetime
                        value={end}
                        onChange={date => setEnd(date)} />
                </div>

                <button>Add Class</button>
                <NavButton />
            </form>
        </Modal>
    )
}