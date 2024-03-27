import React, { useState, useRef } from "react";
import Modal from "react-modal"
import Datetime from 'react-datetime'

export default function ({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    // const titleInputRef = useRef(null); 

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Student Name"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

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

            </form>
        </Modal>
    )
}