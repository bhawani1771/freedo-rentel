import React from "react";
import { StatsSection } from "../src/component/statesection";
import "./page.css";

function About() {
  return (
    <div className="about-wrapper">
      {/* 1. Header Hero Intro (Without Banner Image) */}
      <section className="about-hero">
        <span className="badge">ABOUT FREEDO</span>
        <h1>Freedom To Move, Anytime & Anywhere</h1>
        <p className="hero-desc">
          We are redefining smart urban mobility in India by offering reliable, 
          sanitized, and budget-friendly two-wheelers on flexible daily, weekly, 
          and monthly subscriptions.
        </p>
      </section>

      {/* 2. Mission & Vision Dual Section */}
      <section className="mission-vision-container">
        <div className="info-box">
          <div className="box-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To eliminate the burden of vehicle ownership, insurance costs, and depreciation 
            by providing seamless, instant-access two-wheeler rentals to commuters across cities.
          </p>
        </div>

        <div className="info-box">
          <div className="box-icon">🚀</div>
          <h3>Our Vision</h3>
          <p>
            To build the largest connected ecosystem of sustainable and smart urban micro-mobility, 
            enabling seamless first and last-mile travel with absolute safety.
          </p>
        </div>
      </section>

      {/* 3. Core Features / Why Choose Us */}
      <section className="features-section">
        <div className="section-title">
          <span className="badge">WHY CHOOSE US</span>
          <h2>Crafted For Everyday Riders</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Paperless & Fast</h4>
            <p>100% digital KYC and instant approval so you hit the road without paperwork.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h4>Certified & Insured</h4>
            <p>Every scooter and bike comes with comprehensive insurance and routine health checks.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💸</div>
            <h4>Zero Hidden Costs</h4>
            <p>Transparent rentals with maintenance, wear-and-tear, and roadside assistance covered.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h4>Flexible Plans</h4>
            <p>Rent for a single day, extend for a week, or upgrade to monthly subscriptions effortlessly.</p>
          </div>
        </div>
      </section>

      {/* 4. Simple 3-Step Process */}
      <section className="steps-section">
        <div className="section-title">
          <span className="badge">HOW IT WORKS</span>
          <h2>Ride In 3 Easy Steps</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h4>Select Ride</h4>
            <p>Pick your preferred scooty or motorcycle based on your commute needs.</p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h4>Upload KYC</h4>
            <p>Quick verification with your driving license and basic identification details.</p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h4>Start Riding</h4>
            <p>Pick up from your nearest hub or get it doorstep delivered and start riding.</p>
          </div>
        </div>
      </section>

      {/* 5. Live Stats Section */}
      <StatsSection />
    </div>
  );
}

export { About };