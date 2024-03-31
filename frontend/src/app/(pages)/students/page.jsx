
import "./students.scss"
import Nav from '../../components/nav/Nav';



export default function Students() {


    return (
        <article className="students">
            <Nav />

            <section className="students-body">
                <section className="students-list">
                    <h2 className="students-list-title">Student List</h2>

                    <div className="students-names">
                        <div className="students-name">YING XIU</div>
                    </div>
                </section>

                <section className="course-records">
                    <h2 className="course-records-title">Course Record</h2>

                    <div className="course-records-info">
                        <div>Date</div>
                        <div>Start Time</div>
                        <div>End Time</div>
                    </div>

                    <div className="button-container">
                        <button className="excel-button">EXCEL</button>
                    </div>

                    <div>
                        <h2 className="course-hour-title">Total Hours</h2>
                        <div className="course-hour">4 hours</div>
                    </div>
                </section>

                <section className="student-payments">
                    <h2 className="student-payments-title">Payments</h2>

                    <div className="student-payments-info">
                        <div>Date</div>
                        <div>Amount</div>
                    </div>

                    <div className="button-container">
                        <button className="invoice-button">INVOICE</button>
                    </div>

                    <div className="unit-price">
                        <h2 className="unit-price-title">Unit Price</h2>
                        <div className="unit-price-amount">$50/h</div>
                        <div className="price-input">
                            <label htmlFor="unitPrice">
                                <input id="unitPrice" type="text" placeholder="Update price here" />
                            </label>
                            <button>Update</button>
                        </div>
                    </div>
                </section>
            </section>
        </article>
    )
}