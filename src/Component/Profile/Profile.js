import React from 'react'
import"./Profile.css";

const Profile = () => {
  return (
    <div>
      <section class="profile">
        <h2>Create Patient Profile</h2>
        <form id="profile-form">
            <label for="name">Full Name:</label>
            <input type="text" id="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" required/>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" required/>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" required/>

            <label for="medical-history">Medical History:</label>
            <textarea id="medical-history" rows="4"></textarea>

            <button type="submit">Save Profile</button>
        </form>
    </section>
    </div>
  )
}

export default Profile
