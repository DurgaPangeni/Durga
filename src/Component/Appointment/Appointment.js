import React from 'react'
import"./Appointment.css";

const Appointment = () => {
  return (
    <div>
    <section class="appointment-system">
        <h2>Book an Appointment</h2>
        <form>
            <label for="doctor">Select Doctor:</label>
            <select id="doctor" required>
                <option value="">--Choose a Doctor--</option>
                <option value="dr1">Dr. Smith</option>
                <option value="dr2">Dr. Durga</option>
                <option value="dr3">Dr. Amrit</option>
            </select>
            
            <label for="date">Select Date:</label>
            <input type="date" id="date" required/>
            
            <label for="time">Select Time:</label>
            <select id="time" required>
                <option value="">--Select Time--</option>
                <option value="10am">10:00 AM</option>
                <option value="11am">11:00 AM</option>
                <option value="1pm">01:00 PM</option>
                <option value="2pm">02:00 PM</option>
                <option value="3pm">03:00 PM</option>
                <option value="4pm">04:00 PM</option>
                <option value="1pm">05:00 PM</option>
                <option value="1pm">06:00 PM</option>
                <option value="1pm">07:00 PM</option>
                <option value="1pm">08:00 PM</option>
                <option value="1pm">09:00 PM</option>
                <option value="1pm">10:00 PM</option>

            </select>
            
            <button type="submit">Book Appointment</button>
        </form>
    </section> 
    </div>
  )
}

export default Appointment
