// rafce anf enter
import React, { useEffect } from 'react';
import"./Home.css";
import patient from "../../Assets/patient.jpg";


const Home = () => {
  useEffect(() =>{
    document.title="Telemedicine";
   },[]);

  return (
    <body>
    <header>
        <h1>Welcome to Our Telemedicine Platform</h1>
        <p>Your health is just a click away.</p>
    </header>
    
    <section class="gallery">
        <div class="card">
            {/* <img src="../../Assets/patient.jpg" alt="Patient" /> */}
            <img src={patient} alt="patient" />
            <h3>For Patients</h3>
            <p>Access healthcare easily and safely from your home.</p>
            </div>
    </section>
    </body>
  )
}

export default Home
