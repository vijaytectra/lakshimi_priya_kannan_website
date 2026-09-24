import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Memberships from './components/Memberships';
import StartHere from './components/StartHere';
import About from './components/About';
import Certifications from './components/Certifications';
import Expertise from './components/Expertise';
import Decisions from './components/Decisions';
import Approach from './components/Approach';
import YourVisit from './components/YourVisit';
import Access from './components/Access';
import PatientReports from './components/PatientReports';
import Questions from './components/Questions';
import ReferringPhysicians from './components/ReferringPhysicians';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Practice Stats Section ("Container Margin") */}
        <Stats />

        {/* Professional Memberships Section */}
        <Memberships />

        {/* Start Here Section */}
        <StartHere />

        {/* About Dr. Kannan Section */}
        <About />

        {/* Why Three Certifications Matter Section */}
        <Certifications />

        {/* Areas of Expertise Section */}
        <Expertise />

        {/* How Treatment Decisions Get Made Section */}
        <Decisions />

        {/* Approach to Care Section */}
        <Approach />

        {/* Your Visit Section */}
        <YourVisit />

        {/* Access, Insurance & Location Section */}
        <Access />

        {/* What Patients Report Section */}
        <PatientReports />

        {/* Questions FAQ Section */}
        <Questions />

        {/* For Referring Physicians Section */}
        <ReferringPhysicians />

        {/* Request an Appointment / Call Back Section */}
        <Appointment />
      </main>

      {/* Medical Oncology & Hematology Footer Section */}
      <Footer />
    </div>
  );
}
