// add .commit if any changes done in code
import React from 'react'
import"./Services.css";
import VirtualConsulations from "../../Assets/Virtual Consultations.jpeg";
import RemoteMonitoring from "../../Assets/Remote Monitoring.jpeg";
import PrescriptionManagement from "../../Assets/Prescription Management.png";
import AppointmentScheduling from "../../Assets/Appointment Scheduling.jpeg";
import HealthRecordAccess from "../../Assets/Health Records Access.jpeg";
import Teletherapy from "../../Assets/Teletherapy.jpeg";
import PatientEducation from "../../Assets/Patient Education.jpeg";
import Support from "../../Assets/Support.jpeg";

const Services = () => {

  return (
    <div>
      <section class="services">
    <h2>Our Services</h2>
    <div class="service-card">
        {/* <img src="../../Assets/Virtual Consultations.jpeg" alt="Virtual Consultations" /> */}
        <img src={VirtualConsulations} alt="Virtual Consulations" />
        <h3>Virtual Consultations</h3>
        <p>Connect patients with healthcare professionals via video calls.</p>
    </div>
    <div class="service-card">
        {/* <img src="Remote Monitoring.jpeg" alt="Remote Monitoring" /> */}
        <img src={RemoteMonitoring} alt="RemoteMonitoring" />
        <h3>Remote Monitoring</h3>
        <p>Track health metrics through connected devices.</p>
    </div>
    <div class="service-card">
        {/* <img src="Prescription Management.jpeg" alt="Prescription Management" /> */}
        <img src={PrescriptionManagement} alt="PrescriptionManagement" />
        <h3>Prescription Management</h3>
        <p>Facilitate electronic prescriptions sent to pharmacies.</p>
    </div>
    <div class="service-card">
        {/* <img src="Appointment Scheduling.jpeg" alt="Appointment Scheduling" /> */}
        <img src={AppointmentScheduling} alt="AppointmentScheduling" />
        <h3>Appointment Scheduling</h3>
        <p>Easily book and manage appointments online.</p>
    </div>
    <div class="service-card">
        {/* <img src="Health Records Access.jpeg" alt="Health Records Access" /> */}
        <img src={HealthRecordAccess} alt="HealthRecordAccess" />

        <h3>Health Records Access</h3>
        <p>Secure access to personal health records.</p>
    </div>
    <div class="service-card">
        <img src={Teletherapy} alt="Teletherapy" />
        <h3>Teletherapy</h3>
        <p>Offer mental health services through video or chat.</p>
    </div>
    <div class="service-card">
        <img src={PatientEducation} alt="PatientEducation" />
        <h3>Patient Education</h3>
        <p>Provide resources on various health topics.</p>
    </div>
    <div class="service-card">
        <img src={Support} alt="24/7 Support" />
        <h3>24/7 Support</h3>
        <p>Round-the-clock support for urgent medical inquiries.</p>
    </div>
</section>

</div>
  )
}

export default Services
