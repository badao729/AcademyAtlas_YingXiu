'use client'

import Nav from '../../components/nav/Nav';
import "./tuition.scss"
import { useState } from 'react';
import Datetime from 'react-datetime'
import "./tuition.scss"



export default function Tuition() {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());



    return (
        <article className='tuition'>
            <Nav />
            <section className='tuition-body'>
                <div className='date-range'>
                    <h2 className='date-range-title'>Date Range</h2>
                    <div className='date-range-container'>
                        <label>From:</label>
                        <Datetime
                            value={start}
                            onChange={date => setStart(date)}
                            timeFormat={false} />

                        <label>To:</label>
                        <Datetime
                            value={end}
                            onChange={date => setEnd(date)}
                            timeFormat={false} />
                    </div>
                </div>

                <div className='payment-summary'>
                    <div className='transaction'>
                        <h3>Student Name</h3>
                        <h3>Date</h3>
                        <h3>Amount</h3>
                    </div>

                    <div className='transaction'>
                        <h4>Ying Xiu</h4>
                        <h4>2024-01-01</h4>
                        <h4>$ 500.00</h4>
                    </div>

                    <div className='hst'>
                        <h2>HST:</h2>
                        <h2>amount</h2>
                    </div>

                    <div className='total-payment'>
                        <h2>Total:</h2>
                        <h2>amount</h2>
                    </div>
                </div>

            </section>
        </article>
    )
}