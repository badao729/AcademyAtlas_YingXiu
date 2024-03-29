import "./students.scss"



export default function Students() {


    return (
        <article className="students">
            <section className="students-list">
                <h2>Student List</h2>
                <div className="student-name">YING XIU</div>
            </section>

            <section className="course-records">
                <h2>Course Record</h2>

                <div className="course-record-info">
                    <div>Date</div>
                    <div>Start Time</div>
                    <div>End Time</div>
                </div>

                <button>EXCEL</button>

                <div>
                    <h2>Total Hours</h2>
                    <div>4 hours</div>
                </div>
            </section>

            <section className="student-payments">
                <h2>Payments</h2>

                <div>
                    <div>Date</div>
                    <div>Amount Paid</div>
                </div>

                <button>INVOICE</button>

                <div>
                    <h2>Unit Price</h2>
                    <div>$50/h</div>
                </div>
            </section>

            <section className="update-unit-price">
                <select>
                    <option value="">Select Student</option>
                    <option>Student1</option>
                    <option>Student2</option>
                </select>

                <label htmlFor="unitPrice">Price Per Hour
                    <input id="unitPrice" type="text" placeholder="$50" />
                </label>

                <button>Update</button>

            </section>
        </article>
    )
}